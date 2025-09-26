import CartSidebar from '../../components/sidebar/index';
import { LayoutContainer } from "../layout-container";
import { Outlet } from "react-router";

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Outlet />
            <CartSidebar />
        </LayoutContainer>
    );
}