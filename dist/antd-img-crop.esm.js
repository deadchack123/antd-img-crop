import { __rest, __awaiter } from 'tslib';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { forwardRef, useState, useRef, useCallback, useImperativeHandle, memo, useMemo } from 'react';
import { version } from 'antd';
import AntModal from 'antd/es/modal';
import AntUpload from 'antd/es/upload';
import { compareVersions } from 'compare-versions';
import Cropper from 'react-easy-crop';
import AntButton from 'antd/es/button';
import AntSlider from 'antd/es/slider';

const PREFIX = 'img-crop';
const ZOOM_INITIAL = 1;
const ZOOM_STEP = 0.1;
const ROTATION_INITIAL = 0;
const ROTATION_MIN = -180;
const ROTATION_MAX = 180;
const ROTATION_STEP = 1;
const ASPECT_MIN = 0.5;
const ASPECT_MAX = 2;
const ASPECT_STEP = 0.01;

const EasyCrop = forwardRef((props, ref) => {
    const { cropperRef, zoomSlider, rotationSlider, aspectSlider, showReset, resetBtnText, modalImage, aspect: ASPECT_INITIAL, minZoom, maxZoom, cropShape, showGrid, cropperProps, } = props;
    const [zoom, setZoom] = useState(ZOOM_INITIAL);
    const [rotation, setRotation] = useState(ROTATION_INITIAL);
    const [aspect, setAspect] = useState(ASPECT_INITIAL);
    const isResetActive = zoom !== ZOOM_INITIAL ||
        rotation !== ROTATION_INITIAL ||
        aspect !== ASPECT_INITIAL;
    const onReset = () => {
        setZoom(ZOOM_INITIAL);
        setRotation(ROTATION_INITIAL);
        setAspect(ASPECT_INITIAL);
    };
    const [crop, onCropChange] = useState({ x: 0, y: 0 });
    const cropPixelsRef = useRef({ width: 0, height: 0, x: 0, y: 0 });
    const onCropComplete = useCallback((_, croppedAreaPixels) => {
        cropPixelsRef.current = croppedAreaPixels;
    }, []);
    useImperativeHandle(ref, () => ({
        rotation,
        cropPixelsRef,
        onReset,
    }));
    const wrapperClass = '[display:flex] [align-items:center] [width:60%] [margin-inline:auto]';
    const buttonClass = '[display:flex] [align-items:center] [justify-content:center] [height:32px] [width:32px] [background:transparent] [border:0] [font-family:inherit] [font-size:18px] [cursor:pointer] disabled:[opacity:20%] disabled:[cursor:default]';
    const sliderClass = '[flex:1]';
    return (jsxs(Fragment, { children: [jsx(Cropper, Object.assign({}, cropperProps, { ref: cropperRef, image: modalImage, crop: crop, 
                //
                zoom: zoom, rotation: rotation, aspect: aspect, minZoom: minZoom, maxZoom: maxZoom, zoomWithScroll: zoomSlider, 
                //
                cropShape: cropShape, showGrid: showGrid, onCropChange: onCropChange, onZoomChange: setZoom, onRotationChange: setRotation, onCropComplete: onCropComplete, classes: {
                    containerClassName: `${PREFIX}-container ![position:relative] [width:100%] [height:40vh] [&~section:first-of-type]:[margin-top:16px] [&~section:last-of-type]:[margin-bottom:16px]`,
                    mediaClassName: `${PREFIX}-media`,
                } })), zoomSlider && (jsxs("section", { className: `${PREFIX}-control ${PREFIX}-control-zoom ${wrapperClass}`, children: [jsx("button", { className: buttonClass, onClick: () => setZoom(zoom - ZOOM_STEP), disabled: zoom - ZOOM_STEP < minZoom, children: "\uFF0D" }), jsx(AntSlider, { className: sliderClass, min: minZoom, max: maxZoom, step: ZOOM_STEP, value: zoom, onChange: setZoom }), jsx("button", { className: buttonClass, onClick: () => setZoom(zoom + ZOOM_STEP), disabled: zoom + ZOOM_STEP > maxZoom, children: "\uFF0B" })] })), rotationSlider && (jsxs("section", { className: `${PREFIX}-control ${PREFIX}-control-rotation ${wrapperClass}`, children: [jsx("button", { className: `${buttonClass} [font-size:16px]`, onClick: () => setRotation(rotation - ROTATION_STEP), disabled: rotation === ROTATION_MIN, children: "\u21BA" }), jsx(AntSlider, { className: sliderClass, min: ROTATION_MIN, max: ROTATION_MAX, step: ROTATION_STEP, value: rotation, onChange: setRotation }), jsx("button", { className: `${buttonClass} [font-size:16px]`, onClick: () => setRotation(rotation + ROTATION_STEP), disabled: rotation === ROTATION_MAX, children: "\u21BB" })] })), aspectSlider && (jsxs("section", { className: `${PREFIX}-control ${PREFIX}-control-aspect ${wrapperClass}`, children: [jsx("button", { className: buttonClass, onClick: () => setAspect(aspect - ASPECT_STEP), disabled: aspect - ASPECT_STEP < ASPECT_MIN, children: "\u2195\uFE0F" }), jsx(AntSlider, { className: sliderClass, min: ASPECT_MIN, max: ASPECT_MAX, step: ASPECT_STEP, value: aspect, onChange: setAspect }), jsx("button", { className: buttonClass, onClick: () => setAspect(aspect + ASPECT_STEP), disabled: aspect + ASPECT_STEP > ASPECT_MAX, children: "\u2194\uFE0F" })] })), showReset && (zoomSlider || rotationSlider || aspectSlider) && (jsx(AntButton, { className: "[bottom:20px] [position:absolute]", style: isResetActive ? {} : { opacity: 0.3, pointerEvents: 'none' }, onClick: onReset, children: resetBtnText }))] }));
});
var EasyCrop$1 = memo(EasyCrop);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.visible{visibility:visible}.flex{display:flex}.grid{display:grid}.\\!\\[position\\:relative\\]{position:relative!important}.\\[align-items\\:center\\]{align-items:center}.\\[background\\:transparent\\]{background:transparent}.\\[border\\:0\\]{border:0}.\\[bottom\\:20px\\]{bottom:20px}.\\[cursor\\:pointer\\]{cursor:pointer}.\\[display\\:flex\\]{display:flex}.\\[flex\\:1\\]{flex:1}.\\[font-family\\:inherit\\]{font-family:inherit}.\\[font-size\\:16px\\]{font-size:16px}.\\[font-size\\:18px\\]{font-size:18px}.\\[height\\:32px\\]{height:32px}.\\[height\\:40vh\\]{height:40vh}.\\[justify-content\\:center\\]{justify-content:center}.\\[margin-inline\\:auto\\]{margin-inline:auto}.\\[position\\:absolute\\]{position:absolute}.\\[width\\:100\\%\\]{width:100%}.\\[width\\:32px\\]{width:32px}.\\[width\\:60\\%\\]{width:60%}.disabled\\:\\[cursor\\:default\\]:disabled{cursor:default}.disabled\\:\\[opacity\\:20\\%\\]:disabled{opacity:20%}.\\[\\&\\~section\\:first-of-type\\]\\:\\[margin-top\\:16px\\]~section:first-of-type{margin-top:16px}.\\[\\&\\~section\\:last-of-type\\]\\:\\[margin-bottom\\:16px\\]~section:last-of-type{margin-bottom:16px}";
styleInject(css_248z);

const openProp = compareVersions(version, '4.23.0') === -1 ? 'visible' : 'open';
const deprecate = (obj, old, now) => {
    if (old in obj) {
        console.error(`\`${old}\` is deprecated, please use \`${now}\` instead`);
        return obj[old];
    }
    return obj[now];
};
const ImgCrop = forwardRef((props, cropperRef) => {
    const { quality = 0.4, fillColor = 'white', 
    // @ts-ignore
    zoomSlider: ZOOM_SLIDER = true, 
    // @ts-ignore
    rotationSlider: ROTATION_SLIDER = false, aspectSlider = false, showReset = false, resetText, aspect = 1, minZoom = 1, maxZoom = 3, 
    // @ts-ignore
    cropShape: CROP_SHAPE = 'rect', 
    // @ts-ignore
    showGrid: SHOW_GRID = false, cropperProps, modalClassName, modalTitle, modalWidth, modalOk, modalCancel, onModalOk, onModalCancel, modalProps, beforeCrop, children, } = props;
    /**
     * init
     */
    const zoomSlider = deprecate(props, 'zoom', 'zoomSlider') || true;
    const rotationSlider = deprecate(props, 'rotate', 'rotationSlider') || false;
    const cropShape = deprecate(props, 'shape', 'cropShape') || 'rect';
    const showGrid = deprecate(props, 'grid', 'showGrid') || false;
    if ('onUploadFail' in props) {
        console.error(`\`onUploadFail\` is removed, because the only way it is called, is when the file is rejected by beforeUpload`);
    }
    deprecate(props, 'modalMaskTransitionName', 'modalProps.maskTransitionName');
    deprecate(props, 'modalTransitionName', 'modalProps.transitionName');
    const cb = useRef({});
    cb.current.onModalOk = onModalOk;
    cb.current.onModalCancel = onModalCancel;
    cb.current.beforeCrop = beforeCrop;
    /**
     * crop
     */
    const easyCropRef = useRef(null);
    const getCropCanvas = useCallback((target) => {
        var _a;
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const context = ((_a = target === null || target === void 0 ? void 0 : target.getRootNode) === null || _a === void 0 ? void 0 : _a.call(target)) || document;
        const imgSource = context.querySelector(`.${PREFIX}-media`);
        const { width: cropWidth, height: cropHeight, x: cropX, y: cropY, } = easyCropRef.current.cropPixelsRef.current;
        if (rotationSlider &&
            easyCropRef.current.rotation !== ROTATION_INITIAL) {
            const { naturalWidth: imgWidth, naturalHeight: imgHeight } = imgSource;
            const angle = easyCropRef.current.rotation * (Math.PI / 180);
            // get container for rotated image
            const sine = Math.abs(Math.sin(angle));
            const cosine = Math.abs(Math.cos(angle));
            const squareWidth = imgWidth * cosine + imgHeight * sine;
            const squareHeight = imgHeight * cosine + imgWidth * sine;
            canvas.width = squareWidth;
            canvas.height = squareHeight;
            ctx.fillStyle = fillColor;
            ctx.fillRect(0, 0, squareWidth, squareHeight);
            // rotate container
            const squareHalfWidth = squareWidth / 2;
            const squareHalfHeight = squareHeight / 2;
            ctx.translate(squareHalfWidth, squareHalfHeight);
            ctx.rotate(angle);
            ctx.translate(-squareHalfWidth, -squareHalfHeight);
            // draw rotated image
            const imgX = (squareWidth - imgWidth) / 2;
            const imgY = (squareHeight - imgHeight) / 2;
            ctx.drawImage(imgSource, 0, 0, imgWidth, imgHeight, imgX, imgY, imgWidth, imgHeight);
            // crop rotated image
            const imgData = ctx.getImageData(0, 0, squareWidth, squareHeight);
            canvas.width = cropWidth;
            canvas.height = cropHeight;
            ctx.putImageData(imgData, -cropX, -cropY);
        }
        else {
            canvas.width = cropWidth;
            canvas.height = cropHeight;
            ctx.fillStyle = fillColor;
            ctx.fillRect(0, 0, cropWidth, cropHeight);
            ctx.drawImage(imgSource, cropX, cropY, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);
        }
        return canvas;
    }, [fillColor, rotationSlider]);
    /**
     * upload
     */
    const [modalImage, setModalImage] = useState('');
    const onCancel = useRef();
    const onOk = useRef();
    const uploadComponent = useMemo(() => {
        const upload = Array.isArray(children) ? children[0] : children;
        const _a = upload.props, { beforeUpload, accept } = _a, restUploadProps = __rest(_a, ["beforeUpload", "accept"]);
        const innerBeforeUpload = (file, fileList) => {
            return new Promise((resolve) => __awaiter(void 0, void 0, void 0, function* () {
                if (typeof cb.current.beforeCrop === 'function') {
                    try {
                        const result = yield cb.current.beforeCrop(file, fileList);
                        if (result !== true) {
                            return resolve(result);
                        }
                    }
                    catch (err) {
                        return resolve(err);
                    }
                }
                // get file result
                const reader = new FileReader();
                reader.addEventListener('load', () => {
                    if (typeof reader.result === 'string') {
                        setModalImage(reader.result); // open modal
                    }
                });
                reader.readAsDataURL(file);
                // on modal cancel
                onCancel.current = () => {
                    var _a, _b;
                    setModalImage('');
                    easyCropRef.current.onReset();
                    resolve(AntUpload.LIST_IGNORE);
                    (_b = (_a = cb.current).onModalCancel) === null || _b === void 0 ? void 0 : _b.call(_a);
                };
                // on modal confirm
                onOk.current = (event) => __awaiter(void 0, void 0, void 0, function* () {
                    setModalImage('');
                    easyCropRef.current.onReset();
                    const canvas = getCropCanvas(event.target);
                    const { type, name, uid } = file;
                    canvas.toBlob((blob) => __awaiter(void 0, void 0, void 0, function* () {
                        var _a, _b, _c, _d, _e, _f;
                        const newFile = new File([blob], name, { type });
                        Object.assign(newFile, { uid });
                        if (typeof beforeUpload !== 'function') {
                            resolve(newFile);
                            (_b = (_a = cb.current).onModalOk) === null || _b === void 0 ? void 0 : _b.call(_a, newFile);
                            return;
                        }
                        try {
                            // https://github.com/ant-design/ant-design/blob/master/components/upload/Upload.tsx#L128-L148
                            // https://ant.design/components/upload-cn#api
                            const result = yield beforeUpload(newFile, [newFile]);
                            const value = result === true ? newFile : result;
                            resolve(value);
                            (_d = (_c = cb.current).onModalOk) === null || _d === void 0 ? void 0 : _d.call(_c, value);
                        }
                        catch (err) {
                            resolve(err);
                            (_f = (_e = cb.current).onModalOk) === null || _f === void 0 ? void 0 : _f.call(_e, err);
                        }
                    }), type, quality);
                });
            }));
        };
        return Object.assign(Object.assign({}, upload), { props: Object.assign(Object.assign({}, restUploadProps), { accept: accept || 'image/*', beforeUpload: innerBeforeUpload }) });
    }, [children, getCropCanvas, quality]);
    /**
     * modal
     */
    const modalBaseProps = useMemo(() => {
        const obj = {};
        if (modalWidth !== undefined)
            obj.width = modalWidth;
        if (modalOk !== undefined)
            obj.okText = modalOk;
        if (modalCancel !== undefined)
            obj.cancelText = modalCancel;
        return obj;
    }, [modalCancel, modalOk, modalWidth]);
    const wrapClassName = `${PREFIX}-modal${modalClassName ? ` ${modalClassName}` : ''}`;
    const lang = typeof window === 'undefined' ? '' : window.navigator.language;
    const isCN = lang === 'zh-CN';
    const title = modalTitle || (isCN ? '编辑图片' : 'Edit image');
    const resetBtnText = resetText || (isCN ? '重置' : 'Reset');
    return (jsxs(Fragment, { children: [uploadComponent, modalImage && (jsx(AntModal, Object.assign({}, modalProps, modalBaseProps, { [openProp]: true, title: title, onCancel: onCancel.current, onOk: onOk.current, wrapClassName: wrapClassName, maskClosable: false, destroyOnClose: true, children: jsxs("div", { style: { display: 'flex' }, children: [jsx("div", { children: "\u0442\u0435\u0441\u0442\u043E\u0432\u044B\u0439 \u0431\u043B\u043E\u043A" }), jsx(EasyCrop$1, { ref: easyCropRef, cropperRef: cropperRef, zoomSlider: zoomSlider, rotationSlider: rotationSlider, aspectSlider: aspectSlider, showReset: showReset, resetBtnText: resetBtnText, modalImage: modalImage, aspect: aspect, minZoom: minZoom, maxZoom: maxZoom, cropShape: cropShape, showGrid: showGrid, cropperProps: cropperProps })] }) })))] }));
});

export { ImgCrop as default };
