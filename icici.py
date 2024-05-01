from breeze_connect import BreezeConnect
import os
# Initialize SDK

breeze = BreezeConnect(api_key=os.environ.get("ICICDIR_APIKEY"))

# Obtain your session key from https://api.icicidirect.com/apiuser/login?api_key=YOUR_API_KEY
# Incase your api-key has special characters(like +,=,!) then encode the api key before using in the url as shown below.
import urllib
# print(os.environ)
print(os.environ.get("ICICDIR_SECRET"))
print(os.environ.get("ICICDIR_APIKEY"))
print("https://api.icicidirect.com/apiuser/login?api_key="+urllib.parse.quote_plus(os.environ.get("ICICDIR_APIKEY")))
# Generate Session
breeze.generate_session(api_secret=os.environ.get("ICICDIR_SECRET"),
                        session_token="36617052")

# Connect to websocket(it will connect to tick-by-tick data server)
breeze.ws_connect()

# Callback to receive ticks.
def on_ticks(ticks):
    print("Ticks: {}".format(ticks))

# Assign the callbacks.
breeze.on_ticks = on_ticks

# subscribe stocks feeds
breeze.subscribe_feeds(exchange_code="NFO", stock_code="ZEEENT", product_type="options", expiry_date="31-Mar-2022", strike_price="350", right="Call", get_exchange_quotes=True, get_market_depth=False)

# subscribe stocks feeds by stock-token
# breeze.subscribe_feeds(stock_token="1.1!500780")

# # unsubscribe stocks feeds
# breeze.unsubscribe_feeds(exchange_code="NFO", stock_code="ZEEENT", product_type="options", expiry_date="31-Mar-2022", strike_price="350", right="Call", get_exchange_quotes=True, get_market_depth=False)

# # unsubscribe stocks feeds by stock-token
# breeze.unsubscribe_feeds(stock_token="1.1!500780")

# # subscribe to Real Time Streaming OHLCV Data of stocks
# breeze.subscribe_feeds(exchange_code="NFO", stock_code="ZEEENT", product_type="options", expiry_date="31-Mar-2022", strike_price="350", right="Call", interval="1minute")

# # subscribe to Real Time Streaming OHLCV Data of stocks by stock-token
# breeze.subscribe_feeds(stock_token="1.1!500780",interval="1second")

# # unsubscribe to Real Time Streaming OHLCV Data of stocks
# breeze.unsubscribe_feeds(exchange_code="NFO", stock_code="ZEEENT", product_type="options", expiry_date="31-Mar-2022", strike_price="350", right="Call", interval="1minute")

# # unsubscribe to Real Time Streaming OHLCV Data of stocks by stock-token
# breeze.unsubscribe_feeds(stock_token="1.1!500780",interval="1second")

# # subscribe order notification feeds(it will connect to order streaming server)
# breeze.subscribe_feeds(get_order_notification=True)

# # unsubscribe order notification feeds(also it will disconnect the order streaming server)
# breeze.unsubscribe_feeds(get_order_notification=True)

# # subscribe oneclick strategy stream
# breeze.subscribe_feeds(stock_token = "one_click_fno")

# # unsubscribe oneclick strategy stream
# breeze.unsubscribe_feeds(stock_token = "one_click_fno")

# # subscribe oneclick equity strategy stream(i_click_2_gain)
# breeze.subscribe_feeds(stock_token = "i_click_2_gain")

# # unsubscribe oneclick equity strategy stream(i_click_2_gain)
# breeze.unsubscribe_feeds(stock_token = "i_click_2_gain")


# ws_disconnect (it will disconnect from all actively connected servers)
breeze.ws_disconnect()

