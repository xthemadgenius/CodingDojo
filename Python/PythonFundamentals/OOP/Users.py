class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0

        # adding the deposit method
    def make_deposit(self, amount):	# takes an argument that is the amount of the deposit
        self.account_balance += amount	# the specific user's account increases by the amount of the value received
    
    def make_withdrawl(self, amount):
        self.account_balance -= amount
    
    def display_user_balance(self):
        self.account_balance

    def pay_user_monthly_earnings(self):
        self.account_balance += 1500

    def rents_due(self):
        self.account_balance -= 600

    def change_email(self):
        self.email = "furryverse@kingfurry.fur"
    
    def transfer_money(self, user, amount):
        self.account_balance -= amount
        user.account_balance += amount


guido = User("Guido van Rossum", "guido@python.com")
monty = User("Monty Python", "monty@python.com")
bob = User("Bob Sagot", "bob@python.com")

print(guido.name)
print(monty.name)
print(bob.name)

guido.make_deposit(100)
guido.make_deposit(200)
guido.make_deposit(200)
guido.make_withdrawl(50)
guido.display_user_balance()

monty.make_deposit(50)
monty.make_deposit(580)
monty.make_withdrawl(120)
monty.make_withdrawl(60)
monty.display_user_balance()

bob.make_deposit(1700)
bob.make_withdrawl(400)
bob.make_withdrawl(200)
bob.make_withdrawl(30)
bob.display_user_balance()

monty.pay_user_monthly_earnings()
monty.rents_due()
monty.change_email()

print(guido.account_balance)
print(monty.account_balance)
print(bob.account_balance)
print(monty.email)

guido.transfer_money(bob, 200)

print(guido.account_balance)
print(bob.account_balance)

