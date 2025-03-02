import Link from "@/client_routing/AppRouter/components/Link";
import { useBrowserContext } from "../../../AppRouter/components/Provider";
import {
  toggleMainGuideVisibility,
  toggleMiniGuideVisibility,
} from "../../../store/app/slice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
import { BurgerSvg, HvdLogo } from "@/client_routing/assets/icons";

export default function GuideBtn() {
  const { windowWidth, mainGuideVisible, miniGuideVisible } = useAppSelector(
    (state) => state.app
  );

  const dispatch = useAppDispatch();

  const { targetRoute } = useBrowserContext();

  const handleClick = () => {
    if (targetRoute !== "/watch" && windowWidth > 1200) {
      dispatch(toggleMiniGuideVisibility(!miniGuideVisible));
    } else {
      dispatch(toggleMainGuideVisibility(!mainGuideVisible));
    }
  };

  return (
    <div className='guide-button'>
      <div className='guide-switcher' onClick={handleClick}>
        <BurgerSvg />
      </div>
      <Link to='/'>
        <HvdLogo />
      </Link>
    </div>
  );
}
