import * as react from 'react';
import Cropper, { CropperProps } from 'react-easy-crop';
import { ModalProps, UploadProps } from 'antd';

type BeforeUpload = Exclude<UploadProps['beforeUpload'], undefined>;
type BeforeUploadReturnType = ReturnType<BeforeUpload>;
type ImgCropProps = {
    quality?: number;
    fillColor?: string;
    zoomSlider?: boolean;
    rotationSlider?: boolean;
    aspectSlider?: boolean;
    showReset?: boolean;
    resetText?: string;
    aspect?: number;
    minZoom?: number;
    maxZoom?: number;
    cropShape?: 'rect' | 'round';
    showGrid?: boolean;
    cropperProps?: Omit<CropperProps, 'image' | 'crop' | 'zoom' | 'rotation' | 'aspect' | 'minZoom' | 'maxZoom' | 'zoomWithScroll' | 'cropShape' | 'showGrid' | 'onCropChange' | 'onZoomChange' | 'onRotationChange' | 'onCropComplete' | 'classes'>;
    modalClassName?: string;
    modalTitle?: string;
    modalWidth?: number | string;
    modalOk?: string;
    modalCancel?: string;
    onModalOk?: (value: BeforeUploadReturnType) => void;
    onModalCancel?: () => void;
    modalProps?: Omit<ModalProps, 'className' | 'title' | 'width' | 'okText' | 'cancelText' | 'onOk' | 'onCancel' | 'open' | 'visible' | 'wrapClassName' | 'maskClosable' | 'destroyOnClose'>;
    beforeCrop?: BeforeUpload;
    children: JSX.Element;
};

declare const ImgCrop: react.ForwardRefExoticComponent<ImgCropProps & react.RefAttributes<Cropper>>;

export { ImgCropProps, ImgCrop as default };
