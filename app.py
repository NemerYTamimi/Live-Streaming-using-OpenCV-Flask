from flask import Flask, render_template, request, flash, url_for, send_from_directory, redirect, jsonify, Response
import cv2

app = Flask(__name__)
# for local webcam use cv2.VideoCapture(0)


# generate frame by frame from camera
def gen_frames(username, password, url, port, channel, tech):
    if tech == 'hikvision':
        # x = "rtsp://"+str(username)+":"+str(password)+"@"+str(url)+":"+str(port)+"/Streaming/Channels/"+str(channel)
        x="https://msk.rtsp.me/biqYyPOCxfEeKQ6eH7PCfg/1620084807/hls/f682rABs.m3u8"
        print(x)
        camera = cv2.VideoCapture(x)
        if (camera.isOpened() == False): 
            print("Unable to read camera feed")
        frame_width = int(camera.get(3))
        frame_height = int(camera.get(4))
        # Define the codec and create VideoWriter object.The output is stored in 'outpy.avi' file.
        out = cv2.VideoWriter('./outpy.avi',cv2.VideoWriter_fourcc('M','J','P','G'), 10, (frame_width,frame_height))

    while True:
        # Capture frame-by-frame
        success, frame = camera.read()  # read the camera frame
        if not success:
            break
        else:
            out.write(frame)
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')  # concat frame one by one and show result
    camera.release()
    out.release()
    # Closes all the frames
    cv2.destroyAllWindows()


@app.route('/getVideo/<string:username>/<string:password>/<string:url>/<int:port>/<int:channel>/<string:tech>')
def video_feed(username, password, url, port, channel, tech):
    # Video streaming route. Put this in the src attribute of an img tag
    return Response(gen_frames(username, password, url, port, channel, tech), mimetype='multipart/x-mixed-replace; boundary=frame')


@app.route('/getSnap/<string:username>/<string:password>/<string:url>/<int:port>/<int:channel>/<string:tech>')
def snap_feed(username, password, url, port, channel, tech):
    # Video streaming route. Put this in the src attribute of an img tag
    x = "http://"+str(username)+":"+str(password)+"@"+str(url)+":"+str(port)+"/ISAPI/Streaming/channels/"+str(channel)+"/picture"
    return redirect(x)

@app.route('/')
def viewCam():
    return render_template('index.html')

@app.route('/new')
def newCam():
    return render_template('new/index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=7010, debug=True)
