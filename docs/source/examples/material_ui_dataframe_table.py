from pathlib import Path
from random import random

import idom


here = Path(__file__).parent
df_table = idom.Module("table", source_file=here / "material_ui_dataframe_table.js")
DataFrameTable = df_table.Import("DataFrameTable")


def make_random_data(count):
    return [int(random() * 1000) / 10 for _ in range(count)]


display(
    DataFrameTable,
    {
        "dataframe": [
            {"name": "X", "values": make_random_data(100)},
            {"name": "Y", "values": make_random_data(100)},
            {"name": "Z", "values": make_random_data(100)},
        ]
    },
)
