import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  imageSection: {
    height: height * 0.5,
    position: "relative",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitleText: {
    fontSize: 18,
    textAlign: "center",
    opacity: 0.9,
  },
  formSection: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 40,
    paddingVertical: 40,
  },
  loginTitle: {
    color: "#171717",
    fontSize: 28,
    fontWeight: 600,
    marginBottom: 8,
    textAlign: "center",
  },
  loginSubtitle: {
    color: "#171717",
    fontSize: 14,
    fontWeight: 400,
    marginBottom: 40,
    textAlign: "center",
  },
  microsoftButton: {
    backgroundColor: "#0050A6",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 30,
  },
  disabledButton: {
    opacity: 0.6,
  },
  microsoftIcon: {
    marginRight: 12,
  },
  microsoftButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "400",
  },
  footerContainer: {
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
  },
  linkText: {
    fontWeight: "600",
  },
});