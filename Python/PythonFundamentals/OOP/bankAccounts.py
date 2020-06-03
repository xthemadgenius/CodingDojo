class BankAccount:

    def __init__(self, name, balance, int_rate):
        self.name = name
        self.balance =balance
        self.int_rate = int_rate
    
    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        self.balance -= amount
        return self

    def display_account_info(self):
        self.int_rate().balance().name()
        return self

    def yield_interest(self):
        self.balance += (self.balance *self.int_rate)

b1 = BankAccount('Obi Ezeakachi', 5000, .05)
b2 = BankAccount('Tasha St.Patrick', 80000, .09)

print(b1.name)
b1.deposit(400).deposit(600).deposit(101).withdraw(204).yield_interest()
print(b1.balance)

print(b2.name)
b2.deposit(3000).deposit(6500).withdraw(24).withdraw(80).withdraw(103).withdraw(22).yield_interest()
print(b2.balance)