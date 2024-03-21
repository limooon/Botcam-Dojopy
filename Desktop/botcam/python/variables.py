
edad = int(input("digite la edad"));
if edad >= 18:
    print("mayor de edad");
else:
    if edad > 0:
        print("menor de edad");
    else:
        print("no es correcto")
    
    

numero = int(input("digite el numero"));
if numero > 0:
    print("el numero es positivo: ",numero);
elif numero < 0:
    print("el numero es negativo: ",numero);
else:
    print("el numero es 0: ",numero);
    
x = str(3)    # x will be '3'
y = int(3)    # y will be 3
z = float(3)  # z will be 3.0


x = 5
y = "John"
print(type(x))
print(type(y))


#Python te permite asignar valores a múltiples variables en una línea:
x, y, z = "Orange", "Banana", "Cherry"
print(x)
print(y)
print(z)


#puedes asignar el mismo valor a múltiples variables en una línea:
x = y = z = "Orange"
print(x)
print(y)
print(z)

#salidas multiples
x = "Python"
y = "is"
z = "awesome"
print(x, y, z)



x = "Python "
y = "is "
z = "awesome"
print(x + y + z)


xb = "variable global"

def myfunc():
  print("Python is " + xb)

myfunc()


x = 1    # int
y = 2.8  # float
z = 1j   # complex

#convert from int to float:
a = float(x)

#convert from float to int:
b = int(y)

#convert from int to complex:
c = complex(x)

print(a)
print(b)
print(c)

print(type(a))
print(type(b))
print(type(c))

x = float(1)     # x will be 1.0
y = float(2.8)   # y will be 2.8
z = float("3")   # z will be 3.0
w = float("4.2") # w will be 4.2

#boleanos
print(10 > 9)
print(10 == 9)
print(10 < 9)
 
def myFunction() :
  return True

if myFunction():
  print("YES!")
else:
  print("NO!")
  
#verifica si un objeto de de sierto tipo de dato  
x = 200
print(isinstance(x, int))