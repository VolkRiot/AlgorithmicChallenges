from collections import deque

graph = {}
graph["you"] = ["alice", "bob", "claire"] 
graph["bob"] = ["anuj", "peggy"] 
graph["alice"] = ["peggy"] 
graph["claire"] = ["thom", "jonny"] 
graph["anuj"] = []
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []

search_queue = deque()
search_queue += graph["you"]

searched = []

def breadth_first_search():
  current_search_queue = search_queue
  
  while current_search_queue:
    person = current_search_queue.popleft()
    if person not in searched:
      if person_is_seller(person):
        print(f'{person} is a mango seller')
        return True
      else:
        current_search_queue += graph[person]
        person.push(searched)

    return False


def person_is_seller(person):
  return person[-1] == 'm'

breadth_first_search()