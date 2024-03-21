n = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""
print(n)


a = "Hello, World!"
print(a[1])


for x in "banana":
  print(x)
  
  
b = "Hello, World!"
print(len(b))

txt = "The best things in life are free!"
print("free" in txt)

txt = "The best things in life are free!"
if "free" in txt:
  print("Yes, 'free' is present.")
  
txt = "The best things in life are free!"
print("expensive" not in txt)

txt = "The best things in life are free!"
if "expensive" not in txt:
  print("No, 'expensive' is NOT present.")
  
  
#pociciones de los elementos
b = "Hello, World!"
print(b[2:5])


b = "Hello, World!"
print(b[:5])

b = "Hello, World!"
print(b[2:])


b = "Hello, World!"
print(b[-5:-2])

b = "Hello, World!"
print(b[-5:-2])

#minuscula sy mayusculas
a = "Hello, World!"
print(a.upper())


a = "Hello, World!"
print(a.lower())

#espacios en blanco al inicio y fin
a = " Hello, World! "
print(a.strip()) # returns "Hello, World!"

#remplazo de cadena 
a = "Hello, World!"
print(a.replace("H", "J"))

#divide la caena
a = "Hello, World!"
print(a.split(",")) # returns ['Hello', ' World!']

#concatenas cadenas 
a = "Hello"
b = "World"
c = a + " " + b
print(c)

#ajusta el formato en la imprecion
quantity = 3
itemno = 567
price = 49.95
myorder = "I want {} pieces of item {} for {} dollars."
print(myorder.format(quantity, itemno, price))

#formateo de cadenas
txt = "We are the so-called \"Vikings\" from the north."

#El find()método encuentra la primera aparición del valor especificado.
txt = "Hello, welcome to my world."

x = txt.find("welcome")

print(x)

#¿En qué parte del texto aparece por primera vez la letra "e" cuando solo buscas entre las posiciones 5 y 10?
txt = "Hello, welcome to my world."

x = txt.find("e", 5, 10)

print(x)