require("dotenv").config(".env")
const fs = require("fs")
const kafka = require("./kafka")
const StreamArray = require("stream-json/streamers/StreamArray")
const producer = kafka.producer()

async function main() {
	try {
		await producer.connect()

		const jsonStream = StreamArray.withParser()

		//You'll get json objects here
		//Key is an array-index here
		let count = 0
		jsonStream.on("data", async ({ key, value }) => {
			count++
			if (value.text.indexOf("Slots available") > -1 && value.text.indexOf("Dose 1 Slots available") == -1) {
				let arr = value.text.split("\n").map((e) => e.split(":").map((k) => k.trim().replace(" Pincode", "")))
				const entries = new Map(arr)
				const obj = Object.fromEntries(entries)
				obj.timestamp = new Date(value.date)
				obj["dose_1_slots"] = Number(obj["Slots available"])
				delete obj["Slots available"]
				delete obj["Dose 1 Slots available"]
				delete obj["Dose 2 Slots available"]
				delete obj[""]
				// console.log(obj)

				const responses = await producer.send({
					topic: process.env.KAFKA_TOPIC,
					messages: [{ key: "cowin-event", value: JSON.stringify(obj) }],
				})

				console.log(responses)
			}

			if (value.text.indexOf("Slots available") > -1 && value.text.indexOf("Dose 1 Slots available") > -1) {
				let arr = value.text.split("\n").map((e) => e.split(":").map((k) => k.trim().replace(" Pincode", "")))
				const entries = new Map(arr)
				const obj = Object.fromEntries(entries)
				obj.timestamp = new Date(value.date)
				obj["dose_1_slots"] = Number(obj["Dose 1 Slots available"])
				delete obj["Slots available"]
				delete obj["Dose 1 Slots available"]
				delete obj["Dose 2 Slots available"]
				delete obj[""]
				// console.log(obj)

				const responses = await producer.send({
					topic: process.env.KAFKA_TOPIC,
					messages: [{ key: "cowin-event", value: JSON.stringify(obj) }],
				})

				console.log(responses)
			}
		})

		jsonStream.on("end", () => {
			console.log("All done", count)
		})

		fs.createReadStream("D:/Downloads/result_cowin(Dose 1) 18-44 Mumbai Cowin.json").pipe(jsonStream.input)
	} catch (e) {
		console.error(e)
	}
}

main().catch(console.error)
