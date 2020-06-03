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
        info = self.int_rate, self.balance, self.int_rate
        return self

    def yield_interest(self):
        self.balance += (self.balance *self.int_rate)

b1 = BankAccount('Obi Ezeakachi', 5000, 1111)
b2 = BankAccount('Tasha St.Patrick', 80000, 2222)
b3 = BankAccount('Tommy Egan', 7000, 3333)
print(b1.name)
print(b2.name)
print(b3.name)