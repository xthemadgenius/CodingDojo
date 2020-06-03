class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0

        # adding the deposit method
    def make_deposit(self, amount):	# takes an argument that is the amount of the deposit
        self.account_balance += amount	# the specific user's account increases by the amount of the value received
        return self

    def make_withdrawl(self, amount):
        self.account_balance -= amount
        return self
    
    def display_user_balance(self):
        self.account_balance
        return self

    def pay_user_monthly_earnings(self):
        self.account_balance += 1500
        return self

    def rents_due(self):
        self.account_balance -= 600
        return self

    def change_email(self):
        self.email = "furryverse@kingfurry.fur"
        return self
    
    def transfer_money(self, user, amount):
        self.account_balance -= amount
        user.account_balance += amount


guido = User("Guido van Rossum", "guido@python.com")
monty = User("Monty Python", "monty@python.com")
bob = User("Bob Sagot", "bob@python.com")

print(guido.name)
print(monty.name)
print(bob.name)

guido.make_deposit(100).make_deposit(200).make_deposit(200).make_withdrawl(50)

monty.make_deposit(50).make_deposit(580).make_withdrawl(120).make_withdrawl(60)

bob.make_deposit(1700).make_withdrawl(400).make_withdrawl(200).make_withdrawl(30)

monty.pay_user_monthly_earnings().rents_due().change_email()

print(guido.account_balance)
print(monty.account_balance)
print(bob.account_balance)
print(monty.email)

guido.transfer_money(bob, 200)

print(guido.account_balance)
print(bob.account_balance)

