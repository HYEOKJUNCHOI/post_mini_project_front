/** @jsxImportSource @emotion/react */
import { PropagateLoader } from "react-spinners";
import * as s from "./styles";


function Loading() {

    return <div css={s.loadingBox}>
        <PropagateLoader color=" #ffffff" loading={true} size={25} />
        </div>
}

export default Loading;