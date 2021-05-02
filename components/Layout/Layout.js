import styles from "assets/jss/nextjs-material-kit/pages/components.js";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";

export default function Layout(props) {
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Devteam Finder"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      {props.children}
    </div>
  );
}
