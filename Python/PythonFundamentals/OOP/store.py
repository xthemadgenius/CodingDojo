
class Store:
    def __init__(self, name, list_of_products=[]):
        self.store = name
        self.products = list_of_products

    def update_price(self, percent_change, is_increased):
        if is_increased == True:
            self.products.price += (self.products.price * percent_change)
        else:
            self.products.price -= (self.products.price * percent_change)
        return self

    def print_info(self):
        print(f"{self.products.name}, {self.products.category}, {self.products.price}")
        return self

    def add_product(self, new_product):
        self.products.extend(new_product)
        return self

    def sell_product(self, id):
        self.products = id.remove()
        return self

    def inflation(self, percent_increase):
        for i in range(len(self.products)):
            for jus in range(len(self.products[i])):
                self.products.price[jus] += self.products.price[i] * percent_increase
        return self

    def set_clearance(self, category, percent_discount):
        for i in range(len(self.products)):
            for jus in range(len(self.products[i])):
                self.products.price[jus] -= self.products.price[jus] * percent_discount
                self.products.category[jus] = category
        return self