from BankAccount import BankAccount

class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(balance=0, int_rate=0.02)

    def make_deposit(self, amount):
        self.account.balance += amount
        return self

    def make_withdrawl(self, amount):
        self.account.balance -= amount
        return self
    
    def display_user_balance(self):
        self.account.balance
        return self

    def pay_user_monthly_earnings(self):
        self.account.balance += 1500
        return self

    def rents_due(self):
        self.account.balance -= 600
        return self

    def change_email(self):
        self.email = "furryverse@kingfurry.fur"
        return self
    
    def transfer_money(self, user, amount):
        self.account.balance -= amount
        user.account.balance += amount
        return self


guido = User("Guido van Rossum", "guido@python.com")
monty = User("Monty Python", "monty@python.com")
bob = User("Bob Sagot", "bob@python.com")

print(guido.name)
print(monty.name)
print(bob.name)

guido.make_deposit(100).pay_user_monthly_earnings()
print(guido.account.balance)

