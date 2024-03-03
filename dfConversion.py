import pandas as pd
import talib

import glob

# Use glob to find all files matching the pattern 'Records*.csv'
file_list = glob.glob('Records*.csv')

# Initialize an empty list to store dataframes
dfs = []

# Loop over the list of file names
for file_name in file_list:
    df = pd.read_csv(file_name)

    df['time'] = pd.to_datetime(df['time'], unit='ms')


    # Calculate Moving Averages
    df['SMA_10'] = talib.SMA(df['close'], timeperiod=10)  # Simple Moving Average for 10 periods
    df['EMA_10'] = talib.EMA(df['close'], timeperiod=10)  # Exponential Moving Average for 10 periods

    # Calculate RSI (Relative Strength Index)
    df['RSI_14'] = talib.RSI(df['close'], timeperiod=14)  # RSI over 14 periods

    # Calculate MACD (Moving Average Convergence Divergence)
    df['MACD'], df['MACD_signal'], df['MACD_hist'] = talib.MACD(df['close'], fastperiod=12, slowperiod=26, signalperiod=9)
    df = df.dropna()

    # Select columns to normalize (all except 'time')
    columns_to_normalize = df.columns.difference(['time'])

    # Apply Min-Max scaling to the selected columns
    df_normalized = df.copy()  # Create a copy to preserve the original DataFrame
    df_normalized[columns_to_normalize] = (df[columns_to_normalize] - df[columns_to_normalize].min()) / (df[columns_to_normalize].max() - df[columns_to_normalize].min())

    # Display the first few rows of the DataFrame with normalized columns (except 'time')
    df = df_normalized
    print(df.head())

    # Display the first few rows of the normalized DataFrame
    print(df.head())