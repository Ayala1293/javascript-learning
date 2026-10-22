import pyautogui 
import time
import keyboard
text="print(`hello world`)"
print("click on the text editor and wait for 5 seconds")
print("you have 5 seconds to click on the text eiditor")
print("pres F8 to stop")
time.sleep (5)
while True:
  if keyboard.is_pressed ("F8"):
    print("Typing stoppedt.")
    break
  pyautogui.write (text,
interval =0.05) 
  pyautogui.press("enter")
  time.sleep(1)
