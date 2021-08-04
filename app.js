require("dotenv").config(".env")

const kafka = require("./kafka")
const producer = kafka.producer()

async function main() {
	try {
		await producer.connect()

		// const responses = await producer.send({
		// 	topic: process.env.KAFKA_TOPIC,
		// 	messages: [{ key: "cowin-event", value: JSON.stringify(e) }],
		// })
	} catch (e) {
		console.error(e)
	}
}
