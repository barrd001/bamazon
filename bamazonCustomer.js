const mysql = require('mysql');
const inquirer = require('inquirer');

let con = mysql.createConnection( {
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'password',
	database: 'bamazon_db'
});

con.connect((err) => {
	if (err) throw err;
	console.log('Welcome to bAmazon');
	order()
	
});





async function order(){
	await showAll()
	let answers = await inquire()
	console.log(answers)

	await createOrder(answers)

	// if answers are ....
	// let transactionResults =  await createOrder(answers)
	// 
	// go back to original loop by calling this function again 
	con.end();
};


function createOrder(answers){
	return new Promise( (resolve, reject) => {
		
		
		con.query("SELECT item_id, product_name FROM products", (err, res) => {
			if(err) throw err;

				console.log(res);
				for (var i = 0; i < res.length; i++) {	
					console.log(answers.id);			
				if () {
					let foundIt = console.log('found your item!');
					resolve(foundIt);
				}
			}
				
				

			})

		
		})
		// do dataabase stuff
		
		//..
		//..
		//..
		//..


		// when done, call the resolve function and use
		// the results as an argyment to the resolve functon 
		// e.g. resolve(results)
	}

function showAll() {

	return new Promise((resolve, reject) => {
		con.query('SELECT * FROM products', (err, res) => {
			if(err) throw err;
			// console.log(res);
			console.log('ID | Product Name | Price($)');
			console.log('-------------------------------');
			for (var i = 0; i < res.length; i++) {
				console.log(res[i].item_id + ' | ' + res[i].product_name + ' | ' + res[i].price)
			}
			console.log('----------------------------')
			resolve();
		})
	})
	
}

function inquire(){

	return inquirer
	.prompt([
		{
			type: 'input',
			message: 'Enter the item ID of the product you would like to purchase',
			name: 'id'
		},
		{
			type: 'input',
			message: 'How any would you like to purchase?',
			name: 'quantity'
		}
	])

}


