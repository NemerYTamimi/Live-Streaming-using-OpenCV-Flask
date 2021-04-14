import threading
import time
import cv2

cap = cv2.VideoCapture('rtsp://admin:wireless-ip-22@176.67.56.49:554/Streaming/Channels/101')
cap.set(cv2.CAP_PROP_BUFFERSIZE, 3)
counter = 0

while True:
   ret, frame = cap.read()
   if ret:
       cv2.imwrite(str(counter) + '.jpg', frame)
       counter = counter + 1
   time.sleep(1)
