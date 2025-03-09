import { useAppRouterContext } from "@/client_routing/AppRouter/components/contexts/AppRouterContext";
import {
  toggleMainGuideVisibility,
  toggleMiniGuideVisibility,
} from "../../../store/app_store/slice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
import { BurgerSvg, HvdLogo } from "@/client_routing/assets/icons";
import Link from "@/client_routing/AppRouter/components/Link";

export default function GuideBtn() {
  const { windowWidth, mainGuideVisible, miniGuideVisible } = useAppSelector(
    (state) => state.app
  );

  const dispatch = useAppDispatch();

  const { targetRoute } = useAppRouterContext();

  const handleClick = () => {
    if (!targetRoute.includes("/watch") && windowWidth > 1200) {
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
      <Link href='/'>
        <HvdLogo />
      </Link>
    </div>
  );
}
