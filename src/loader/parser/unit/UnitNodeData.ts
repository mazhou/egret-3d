﻿module egret3d {
    /**
    * @language zh_CN
    * @private
    * @class egret3d.UnitNodeData
    * @classdesc
    * 节点数据
    * @version Egret 3.0
    * @platform Web,Native
    */
    export class UnitNodeData {

        public type: string = "";

        public insID: number = 0;

        public parent: number = 0;

        public name: string = "";

        public staticType: string = "";

        public path: string = "";

        public fov: number = 0.0; 

        public clipNear: number = 0.0;

        public clipFar: number = 0.0;

        public tagName: string = "";
        /**
         * @language zh_CN
         * 对应的材质球id
         * @version Egret 3.0
         * @platform Web,Native
         */
        public materialIDs: Array<any> = [];

        /**
         * @language zh_CN
         * 拥有的动画剪辑名的列表
         * @version Egret 3.0
         * @platform Web,Native
         */
        public skinClips: Array<any> = [];

        /**
         * @language zh_CN
         * 拥有的动画剪辑名的列表
         * @version Egret 3.0
         * @platform Web,Native
         */
        public propertyAnims: Array<any> = [];

        /**
         * @language zh_CN
         * 是否启用公告板模式
         * @version Egret 3.0
         * @platform Web,Native
         */
        public billboard: boolean = false;

        public visible: boolean = true;

        /**
         * @language zh_CN
         * 坐标x
         * @version Egret 3.0
         * @platform Web,Native
         */
        public x: number = 0;

        /**
         * @language zh_CN
         * 坐标y
         * @version Egret 3.0
         * @platform Web,Native
         */
        public y: number = 0;

        /**
         * @language zh_CN
         * 坐标z
         * @version Egret 3.0
         * @platform Web,Native
         */
        public z: number = 0;

        /**
         * @language zh_CN
         * 旋转x分量
         * @version Egret 3.0
         * @platform Web,Native
         */
        public rx: number = 0;

        /**
         * @language zh_CN
         * 旋转y分量
         * @version Egret 3.0
         * @platform Web,Native
         */
        public ry: number = 0;

        /**
         * @language zh_CN
         * 旋转z分量
         * @version Egret 3.0
         * @platform Web,Native
         */
        public rz: number = 0;


        /**
         * @language zh_CN
         * 旋转w分量
         * @version Egret 3.0
         * @platform Web,Native
         */
        public rw: number = 0;

        /**
         * @language zh_CN
         * x轴缩放
         * @version Egret 3.0
         * @platform Web,Native
         */
        public sx: number = 1;

        /**
         * @language zh_CN
         * y轴缩放
         * @version Egret 3.0
         * @platform Web,Native
         */
        public sy: number = 1;

        /**
         * @language zh_CN
         * z轴缩放
         * @version Egret 3.0
         * @platform Web,Native
         */
        public sz: number = 1;

        public skeletonAnimation: number = -1;

        public propertyAnimsId: number = -1;

        //public texture: string = "";
        //public width: number = 0;
        //public height: number = 0;
        //public depth: number = 0;
        //public segmentsW: number = 0;
        //public segmentsH: number = 0;

        public geometry: any = [];

        public grass: any = [];

        /**
        * @private
        * @language zh_CN
        * @version Egret 3.0
        * @platform Web,Native
        */
        public object3d: Object3D;

        public childs: Array<any> = [];

        public boneBind: any = {};
        public lightData: UnitLightData;
        public lightIds: any[] = [];

        public auto: boolean = false;
        public loop: boolean = false;

        public uv2Id: number = -1;
    }
}