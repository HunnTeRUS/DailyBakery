import BakeryInterface from "./BakeryInterfaceDAO";

export default interface FavoriteNavigationInterface {
    bakeries?: BakeryInterface[],
    method?: string,
    bakeryName?: string,
}