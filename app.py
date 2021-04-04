from flask import Flask, render_template, request, flash, url_for, send_from_directory,redirect,jsonify,Response
import cv2

app = Flask(__name__)
# for local webcam use cv2.VideoCapture(0)

def gen_frames(username,password,url,port,channel,tech):  # generate frame by frame from camera
    if tech=='hikvision':
        camera = cv2.VideoCapture(f"rtsp://{username}:{password}@{url}:{port}/Streaming/Channels/{channel}/") 
    
    while True:
        # Capture frame-by-frame
        success, frame = camera.read()  # read the camera frame
        if not success:
            break
        else:
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')  # concat frame one by one and show result


@app.route('/getVideo/<string:username>/<string:password>/<string:url>/<int:port>/<int:channel>/<string:tech>')
def video_feed(username,password,url,port,channel,tech):
    #Video streaming route. Put this in the src attribute of an img tag
    return Response(gen_frames(username,password,url,port,channel,tech), mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/getSnap/<string:username>/<string:password>/<string:url>/<int:port>/<int:channel>/<string:tech>')
def snap_feed(username,password,url,port,channel,tech):
    #Video streaming route. Put this in the src attribute of an img tag
    return redirect(f"http://{username}:{password}@{url}:{port}/ISAPI/Streaming/channels/{channel}/picture", code=302)


if __name__ == '__main__':
    app.run(debug=True)
