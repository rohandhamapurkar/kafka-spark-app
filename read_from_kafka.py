from pyspark.sql.functions import *
from pyspark.sql.types import *


schema = StructType() \
        .add("Vaccine", StringType()) \
        .add("Location", StringType()) \
        .add("dose_1_slots", IntegerType()) \
        .add("timestamp", DateType())

df = spark \
  .readStream \
  .format("kafka") \
  .option("kafka.bootstrap.servers", "kafka:29092") \
  .option("subscribe", "mumbai-cowin-data-stream") \
  .option("startingOffsets", "earliest") \
  .load() \
  .select(from_json(col("value").cast("string"), schema).alias("parsed_json"))

vaccineCount = df.groupBy("parsed_json.Vaccine").count()


# def process_row(row):
#   print(row)

# query = df.writeStream.foreach(process_row).start()  

df.createOrReplaceTempView("mumbai_cowin_dose_1_data")
vaccineCount = spark.sql("select * from mumbai_cowin_dose_1_data")

query = vaccineCount.writeStream \
            .outputMode("complete") \
            .format("console") \
            .start()