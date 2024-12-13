/// <reference types="react" />
import { ReactThreeFiber } from "@react-three/fiber";
import { Object3D, Light } from "three";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: ReactThreeFiber.Object3DNode<Light, typeof Light>;
      pointLight: ReactThreeFiber.Object3DNode<Light, typeof Light>;
      primitive: ReactThreeFiber.Object3DNode<Object3D, typeof Object3D>;
    }
  }
}
