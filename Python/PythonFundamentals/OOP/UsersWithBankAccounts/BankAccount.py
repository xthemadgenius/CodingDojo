
class BankAccount:

    def __init__(self, balance, int_rate):
        self.balance =balance
        self.int_rate = int_rate
    
    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        self.balance -= amount
        return self

    def display_account_info(self):
        print(f"Your Balance is {self.balance} with an Interest Rate {self.int_rate * 100}%")
        return self

    def yield_interest(self):
        self.balance += (self.balance *self.int_rate)
        return self