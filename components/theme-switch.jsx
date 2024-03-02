"use client";
/* eslint-disable */
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { SwitchProps, useSwitch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import clsx from "clsx";
import { motion } from "framer-motion";
import { SunFilledIcon, MoonFilledIcon } from "./icons";
import { Tooltip } from "@nextui-org/react";

export const ThemeSwitch= ({
  className,
  classNames,
}) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: theme === "light" || isSSR,
    "aria-label": `Switch to ${
      theme === "light" || isSSR ? "dark" : "light"
    } mode`,
    onChange,
  });

  return (
    <Tooltip
      content={`${
        theme === "light" || isSSR ? "Dark" : "Light"
      } mode`}
      className="flex items-center"
      showArrow
    >
      <Component
        {...getBaseProps({
          className: clsx(
            "px-px transition-opacity hover:opacity-80 cursor-pointer",
            className,
            classNames?.base
          ),
        })}
      >
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <motion.div
          initial={{ scale: 0, translateX: "333px" }}
          animate={{ scale: 1, translateX: 0 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%",
            transition: { duration: 2.5, type: "spring" },
          }}
          exit={{ scale: 0 }}
          transition={{ duration: 1.5 }}

          {...getWrapperProps()}
          className={slots.wrapper({
            class: clsx(
              [
                "border-default-400 dark:border-default-100 border-2 !bg-white dark:!bg-black",
                "backdrop-blur-3xl hover:backdrop-blur-3xl",
                "w-auto h-auto",
                "bg-transparent",
                "rounded-2xl",
                "flex items-center justify-center",
                "!text-default-900",
                "pt-px",
                "p-3",
                "mx-0",
              ],
              classNames?.wrapper
            ),
          })}
        >
          <motion.div
            initial={{ scale: 0, translateX: "333px" }}
            animate={{ scale: 1, translateX: 0 }}
            exit={{ scale: 0 }}
            transition={{ duration: 1.5 ,delay: 1}}
          >

          {!isSelected || isSSR ? (
            <SunFilledIcon size={24} />
            ) : (
              <MoonFilledIcon size={24} className="text-black rotate-[260deg]" />
              )}
              </motion.div>
        </motion.div>
      </Component>
    </Tooltip>
  );
};
