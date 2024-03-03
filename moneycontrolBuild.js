const axios = require('axios');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;	// CSV Logging

const H55 = 5.5 * 60*60*1000

async function fetchData(symbol, end, countback) {
    try {
    
        let endDate = +new Date(end) + H55
        let startDate = +new Date(endDate - 1000*60*60)

        startDate = parseInt(startDate/1000) + ''
        endDate = parseInt(endDate/1000) + ''

        console.debug(symbol, startDate, endDate)

        const axiosConfig = {
            method: 'get',
            url: 'https://priceapi.moneycontrol.com/techCharts/indianMarket/stock/history',
            params: {
                symbol: symbol,
                resolution: '1',
                from: startDate,
                to: endDate,
                countback: countback,
                currencyCode: 'INR'
            },
            headers: {
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:123.0) Gecko/20100101 Firefox/123.0",
                "Accept": "*/*",
                "Accept-Language": "en-US,en;q=0.5"
            }
        };
        const resp = await axios(axiosConfig);
        // console.log(resp.data);
        const records = []
        let i = 0;
        for (const element of resp.data.t) {
            const record = {
                time: (element*1000) + H55, 
                open: resp.data.o[i], 
                high: resp.data.h[i], 
                low: resp.data.l[i], 
                close: resp.data.c[i], 
                volume: resp.data.v[i]
            }
            records.push(record)
            i++
        }

        console.log(`Records-${symbol}-${records[0].time}-${records[records.length-1].time}.csv`)
        const csvWriter = createCsvWriter({
            path: (`Records-${symbol}-${records[0].time}-${records[records.length-1].time}.csv`),
            header: [
                {id: 'time', title: 'time'},
                {id: 'open', title: 'open'},
                {id: 'high', title: 'high'},
                {id: 'low', title: 'low'},
                {id: 'close', title: 'close'},
                {id: 'volume', title: 'volume'},
            ]
        });

        await csvWriter.writeRecords(records)

    } catch (error) {
        console.log(error.response)
        console.error(error);
    }
}

const symbols = [
    'ACC',
    'APLAPOLLO',
    'AUBANK',
    'ABCAPITAL',
    'ABFRL',
    'ALKEM',
    'APOLLOTYRE',
    'ASHOKLEY',
    'ASTRAL',
    'AUROPHARMA',
    'BALKRISIND',
    'BANDHANBNK',
    'BANKINDIA',
    'BATAINDIA',
    'BDL',
    'BHARATFORG',
    'BHEL',
    'BIOCON',
    'CGPOWER',
    'COFORGE',
    'CONCOR',
    'COROMANDEL',
    'CROMPTON',
    'CUMMINSIND',
    'DALBHARAT',
    'DEEPAKNTR',
    'DELHIVERY',
    'DEVYANI',
    'DIXON',
    'LALPATHLAB',
    'ESCORTS',
    'NYKAA',
    'FEDERALBNK',
    'FACT',
    'FORTIS',
    'GLAND',
    'GODREJPROP',
    'FLUOROCHEM',
    'GUJGASLTD',
    'HDFCAMC',
    'HINDPETRO',
    'IDFCFIRSTB',
    'INDIANB',
    'INDHOTEL',
    'IRFC',
    'IGL',
    'INDUSTOWER',
    'IPCALAB',
    'JSWENERGY',
    'JUBLFOOD',
    'KPITTECH',
    'TFH',
    'LTTS',
    'LICHSGFIN',
    'LAURUSLABS',
    'LUPIN',
    'MRF',
    'LODHA',
    'MFIN',
    'MANKIND',
    'MFSL',
    'MAXHEALTH',
    'MAZDOCK',
    'MSUMI',
    'MPHASIS',
    'NHPC',
    'NMDC',
    'NAVINFLUOR',
    'OBEROIRLTY',
    'OIL',
    'PAYTM',
    'POLICYBZR',
    'PAGEIND',
    'PATANJALI',
    'PERSISTENT',
    'PETRONET',
    'PEL',
    'POLYCAB',
    'POONAWALLA',
    'PFC',
    'PRESTIGE',
    'RECLTD',
    'RVNL',
    'SONACOMS',
    'SAIL',
    'SUNTV',
    'SYNGENE',
    'TATACHEM',
    'TATACOMM',
    'TATAELXSI',
    'RAMCOCEM',
    'TORNTPOWER',
    'TIINDIA',
    'UNIONBANK',
    'UBL',
    'IDEA',
    'VOLTAS',
    'YESBANK',
    'ZEEL'
]

const run = async () => {
    for (element of symbols) {
        await fetchData(element, '2024-03-03 15:30:00', 100000);
    }
}
run()