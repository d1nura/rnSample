export const createStyleFromProps = (stylesFunction: any, props: any) => {
    const style = () => stylesFunction({ ...props });
    return style();
};
