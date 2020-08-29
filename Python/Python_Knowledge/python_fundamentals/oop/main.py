
class User:
    def __init__(self, Name, Email, Fav_num=99):
        self.name = Name
        self.email = Email
        self.fav_number = Fav_num
    def say_hi(self, other_person):
        print(f"{self.name} says hi to {other_person.name}!")
        return self

jorge = User(Name="Jorge", Fav_num=27, Email="fake@email.com")

nolan = User(Name="Nolan", Fav_num=9001, Email="haha@totesrealemail.com",)

willy = User(Name="Willy", Email="whatis@anemail.com")

# print(jorge.fav_number)
# print(nolan.fav_number)
# print(willy.fav_number)

jorge.say_hi(nolan).say_hi(willy).say_hi(jorge)
