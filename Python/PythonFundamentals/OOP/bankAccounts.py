class BankAccount:
	def __init__(self, int_rate=0, balance=0):
        self.int_rate = int_rate
        self.balance = balance
        self.name = ""

	def deposit(self, amount):
        self.balance += amount
        return self

	def withdraw(self, amount):
        self.balance -= amount

	def display_account_info(self):
        info = self.int_rate, self.balance, self.name
        return info

	def yield_interest(self):
        self.balance += (self.balance *self.int_rate)