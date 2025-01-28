"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[3881],{2036:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"computer-vision/one","title":"Experiment 1","description":"Basic PIL operations","source":"@site/docs/six/computer-vision/one.mdx","sourceDirName":"computer-vision","slug":"/computer-vision/one","permalink":"/docs/six/computer-vision/one","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Experiment 1","sidebar_position":1,"description":"Basic PIL operations"},"sidebar":"tutorialSidebar","previous":{"title":"Computer vision","permalink":"/docs/six/category/computer-vision"}}');var r=i(4848),s=i(8453),a=i(8731);const o={title:"Experiment 1",sidebar_position:1,description:"Basic PIL operations"},l="Experiment 1",c={},p=[];function m(e){const n={blockquote:"blockquote",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"experiment-1",children:(0,r.jsx)(a.A,{name:"banner",description:"Image Operations Python",children:"Experiment 1"})})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Objective:"})," To perform basic image operations using the Python Imaging Library (PIL) and OpenCV."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:' !pip install opencv-python\n!pip install pillow\n!pip install matplotlib\n\nimport cv2\nfrom google.colab.patches import cv2_imshow\nimport numpy as np\nfrom PIL import Image\nimport matplotlib.pyplot as plt\n# Open the image.\nimg = cv2.imread("content/cv.png")\ncv2_imshow(img)\n\ngray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\n\n# Display sizes of original and grayscale images\nprint(f"Original Image Size: {img.shape}")\nprint(f"Grayscale Image Size: {gray_img.shape}")\n\n# Display both images\ncv2_imshow(img)\ncv2_imshow(gray_img)\n\nblue_channel = img[:,:,0]\ngreen_channel = img[:,:,1]\nred_channel = img[:,:,2]\n\n# Display individual channels\nprint("Blue Channel Shape:", blue_channel.shape)\nprint("Green Channel Shape:", green_channel.shape)\nprint("Red Channel Shape:", red_channel.shape)\n\n# Display individual channel images\ncv2_imshow(blue_channel)\ncv2_imshow(green_channel)\ncv2_imshow(red_channel)\n\nplt.imshow(img)\n\nbad_img = cv2.imread("content/lata.png")\ncv2_imshow(bad_img)\n\nmedian_blurred = cv2.medianBlur(bad_img, 3)\ncv2_imshow(median_blurred)\n\nlow_pass_filtered = cv2.GaussianBlur(median_blurred, (3, 3),0)\n\ncv2_imshow(low_pass_filtered)\n\nimport cv2\nfrom google.colab.patches import cv2_imshow\nimport numpy as np\nimport matplotlib.pyplot as plt\n\ndef transform_image(image, angle, scale):\n    rows, cols = image.shape[:2]\n    center = (cols / 2, rows / 2)\n    M = cv2.getRotationMatrix2D(center, angle, scale)\n    transformed_img = cv2.warpAffine(image, M, (cols, rows))\n    return transformed_img\n\ndef kmeans_clustering(image, k):\n    pixel_vals = image.reshape((-1, 1))\n    pixel_vals = np.float32(pixel_vals)\n    criteria = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 100, 0.85)\n    _, labels, centers = cv2.kmeans(pixel_vals, k, None, criteria, 10, cv2.KMEANS_RANDOM_CENTERS)\n    centers = np.uint8(centers)\n    clustered_image = centers[labels.flatten()]\n    clustered_image = clustered_image.reshape(image.shape)\n    return clustered_image\n\nimg = cv2.imread("clock.jpg")\ngray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\nresized_img = cv2.resize(gray_img, (400, 450))\n\ncv2_imshow(resized_img)\n\nangle = 45\nscale = 0.5\nrotated_img = transform_image(resized_img, angle, scale)\n\ncorrect_k = 3\nundersampled_k = 2\noversampled_k = 5\n\ncorrectly_sampled_img = kmeans_clustering(rotated_img, correct_k)\nundersampled_img = cv2.resize(rotated_img, (200, 225))\nundersampled_result = kmeans_clustering(undersampled_img, undersampled_k)\noversampled_img = cv2.resize(rotated_img, (800, 900))\noversampled_result = kmeans_clustering(oversampled_img, oversampled_k)\n\nplt.figure(figsize=(12, 8))\n\nplt.subplot(1, 3, 1)\nplt.imshow(correctly_sampled_img, cmap=\'gray\')\nplt.title(\'Correctly Sampled\')\n\nplt.subplot(1, 3, 2)\nplt.imshow(undersampled_result, cmap=\'gray\')\nplt.title(\'Undersampled\')\n\nplt.subplot(1, 3, 3)\nplt.imshow(oversampled_result, cmap=\'gray\')\nplt.title(\'Oversampled\')\n\nplt.show()\n\n\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},8731:(e,n,i)=>{i.d(n,{A:()=>s});i(6540);var t=i(6025),r=i(4848);const s=e=>{let{name:n,description:i,children:s}=e;const a=(0,t.Ay)(`/images/${n}.jpg`);return(0,r.jsxs)("div",{style:{display:"inline-block",height:"150px",width:"100%",position:"relative",overflow:"hidden",borderRadius:"5px"},children:[(0,r.jsx)("img",{src:a,alt:a,style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",zIndex:-1}}),(0,r.jsx)("h2",{style:{color:"white",padding:"12px",boxSizing:"border-box",paddingBottom:"0px",fontWeight:"500"},children:s}),(0,r.jsx)("p",{style:{color:"white",paddingTop:"0px",paddingBottom:"12px",paddingLeft:"12px",paddingRight:"12px",boxSizing:"border-box"},children:i})]})}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(6540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);