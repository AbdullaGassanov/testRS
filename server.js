const path = require("path");
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

function sendEmail(res) {
	return new Promise((resolve, reject) => {
		let transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: "rs.neworder@gmail.com",
				pass: "hcddswjbryvolpov",
			},
		});

		const mail_option = {
			from: "rs.neworder@gmail.com",
			to: "rs.neworder@gmail.com",
			subject: "New Order",
			text: "Your new order has been placed",
		};

		transporter.sendMail(mail_option, function (error, info) {
			if (error) {
				console.log(error);
				return reject(error);
			}

			return resolve({ message: "Your order created successfully" });
		});
	});
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/index.html", (req, res) => {
	res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/send", (req, res) => {
	const output = `
		<div class="order__success">
          <img
              src="../dist/img/greenMark2.png"
              alt=""
              srcset=""
              style="background-color: white; border-radius: 50%"
            />
            <p class="order__success-txt">
              Ваш заказ отправлен. Наш менеджер свяжется с вами в ближайщее время
            </p>
        
          </div>`;

	/* sendEmail(); */
	console.log(req.body);
	res.sendFile(path.join(__dirname + "/email.html")); // Path to new page

	console.log("Sending email");
});

app.listen(8000);

console.log("server running on port 8000");
