import Link from "../../AppRouter/components/Link";
import { HvdLogo } from "../../assets/icons";
import GuideBtn from "../guide/components/guide_btn";
import "./masthead.css";

export default function Masthead() {
  return (
    <div className='masthead'>
      <div className='mast-start'>
        <GuideBtn />
      </div>
      <div className='mast-center'></div>
      <div className='mast-end'></div>
    </div>
  );
}
