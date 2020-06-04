# class Store(object):
#     def __init__(self, products, location, owner):
#         self.products = []
#         self.location = location
#         self.owner = owner
#         #self.products.append(products)
#         self.products.extend(products)
#     def add_product(self, addition_product):
#         print("Adding product(s)\n")
#         self.products.append(addition_product)
#     def remove_product(self, remove_product):
#         print("Removing product(s)\n")
#         self.products.remove(remove_product)
#     def inventory(self):
#         print("-----------------------------------------------------")
#         print(self.owner + "'s store location is shown below")
#         print(self.location + "\n")
#         print(self.owner + "'s store has the inventory(ies) shown below")
#         print(self.products)
#         print("=====================================================\n")

# tom_inventory = [ "corn_can_1", "tumbler1", "tumbler2"]
# tom_location = "1234 Five Street, Six City, Seven, USA"
# tom_store = Store(tom_inventory, tom_location, "Tom")


# john_inventory = [ "corn_can_2", "tumbler3", "tumbler4"]
# john_location = "4567 Eight Street, Nine City, Ten, USA"
# john_store = Store(john_inventory, john_location, "John")


# sam_inventory = [ "corn_can_3", "tumbler5", "tumbler6"]
# sam_location = "9876 Four Street, Two City, One, USA"
# sam_store = Store(sam_inventory, sam_location, "Sam")

# tom_store.inventory()
# tom_store.add_product("Tuna Can")
# tom_store.inventory()
# tom_store.remove_product("tumbler1")
# tom_store.inventory()

class Store:
    def __init__(self, name, list_of_products=[]):
        self.item = name
        self.products = list_of_products

    def update_price(self, percent_change, is_increased):
        if is_increased == True:
            self.products.price += (self.products.price * percent_change)
        else:
            self.products.price -= (self.products.price * percent_change)
        return self

    def print_info(self):
        print(f"{self.product.name}, {self.product.category}, {self.product.price}")
        return self

    def add_product(self, new_product):
        return self
    #- takes a product and adds it to the store

    def sell_product(self, id):
    #- remove the product from the store's list of products given the id 
    # (assume id is the index of the product in the list) and print its info.

    def inflation(self, percent_increase):
    #- increases the price of each product by the percent_increase given 
    # (use the method you wrote in the Product class!)

    def set_clearance(self, category, percent_discount):
    # - updates all the products matching the given category by reducing the price
    #  by the percent_discount given (use the method you wrote in the Product class!)