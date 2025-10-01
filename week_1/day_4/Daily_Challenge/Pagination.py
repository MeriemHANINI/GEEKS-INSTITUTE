import math

class Pagination:
    def __init__(self, items=None, page_size=10):
        # Step 2: Initialize items and page size
        self.items = items if items is not None else []
        self.page_size = page_size
        self.current_idx = 0  # internal 0-based page index
        self.total_pages = math.ceil(len(self.items) / self.page_size)

    def get_visible_items(self):
        # Step 3: Slice the list for the current page
        start = self.current_idx * self.page_size
        end = start + self.page_size
        return self.items[start:end]

    # Step 4: Navigation methods
    def go_to_page(self, page_num):
        if page_num < 1 or page_num > self.total_pages:
            raise ValueError(f"Page number {page_num} is out of range")
        self.current_idx = page_num - 1  # convert to 0-based
        return self

    def first_page(self):
        self.current_idx = 0
        return self

    def last_page(self):
        self.current_idx = self.total_pages - 1
        return self

    def next_page(self):
        if self.current_idx < self.total_pages - 1:
            self.current_idx += 1
        return self

    def previous_page(self):
        if self.current_idx > 0:
            self.current_idx -= 1
        return self

    # Step 5: Custom string representation
    def __str__(self):
        return "\n".join(self.get_visible_items())


alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print(p.get_visible_items())
# ['a', 'b', 'c', 'd']

p.next_page()
print(p.get_visible_items())
# ['e', 'f', 'g', 'h']

p.last_page()
print(p.get_visible_items())
# ['y', 'z']

p.go_to_page(7)
print(p.current_idx + 1)
# 7

try:
    p.go_to_page(0)
except ValueError as e:
    print(e)
# Page number 0 is out of range
