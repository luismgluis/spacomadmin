import React, { useCallback } from "react";
import "./HomeSider.scss";

import CText from "../../../ui/CText/CText";
import { HomePaySelected } from "../Home";
import {
	useCurrentConfig,
	useSetCurrentConfig,
} from "../../../hooks/currentConfig";

const TAG = "PAY-SIDER";
type HomeSiderProps = { hidden: boolean; onHidden?: (r: boolean) => void };
const HomeSider: React.FC<HomeSiderProps> = ({
	hidden,
	onHidden = (hide: boolean) => null,
}) => {
	const setConfig = useSetCurrentConfig();
	const config = useCurrentConfig();
	const changePage = useCallback(
		(page: HomePaySelected) => {
			setConfig({ homePageSelected: page });
		},
		[setConfig]
	);
	return (
		<div>
			{/*<Sider
      className="HomeSider"
      hidden={!hidden}
      collapsedWidth={50}
      onCollapse={(res) => onHidden(res)}
      // collapsible
      style={{
        overflow: "auto",
        height: "calc(100vh - 60px)",
        position: "fixed",
        right: 0,
      }}
    >
      <Menu
        className="topMenu"
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[config.homePageSelected]}
      >
        <Menu.Item key="pay" icon={<DollarCircleOutlined />}>
          <div onClick={(e) => changePage("pay")}>Pagos</div>
        </Menu.Item>
        <Menu.Item key="wifi" icon={<WifiOutlined />}>
          <div onClick={(e) => changePage("wifi")}>Wifi</div>
        </Menu.Item>
      </Menu>
      <div className="siderFooter">
        <Menu theme="dark">
          <Menu.Item key="2" icon={<LoginOutlined />}>
            <a href="https://spacom.co/home" target="_parent">
              Cerrar sesión
            </a>
          </Menu.Item>
        </Menu>
        <CText type="p" color="color-basic-600">
          Copyrights &copy; 2021 All Rights Reseverd by Spacom SAS.
        </CText>
      </div>
    </Sider> */}
		</div>
	);
};
export default HomeSider;
