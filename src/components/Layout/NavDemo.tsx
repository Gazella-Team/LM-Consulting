import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';

const NavigationMenuDemo = () => {
  return (
    <NavigationMenu.Root className="z-[1] flex justify-center">
      <NavigationMenu.List className="center m-0 flex list-none rounded-[6px] p-1">
      <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-gray-800 text-sm hover:bg-slate-50 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            Products{' '}
            <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
            <ul className="m-0 grid list-none gap-x-[10px] p-[22px] border rounded-2xl shadow-md sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
                <p>hey</p>
                <p>hey</p>
                <p>hey</p>
                <p>hey</p>
                <p>hey</p>
                <p>hey</p>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-gray-800 text-sm hover:bg-slate-50 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            Overview{' '}
            <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
            <ul className="m-0 grid list-none gap-x-[10px] h-[500px] p-[22px] border rounded-2xl shadow-sm sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
                <p>sup</p>
                <p>hey</p>
                <p>hey</p>
                <p>hey</p>
                <p>hey</p>
                <p>hey</p>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="text-gray-800 hover:bg-violet3 text-sm focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            href="https://github.com/radix-ui"
          >
            Github
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};


export default NavigationMenuDemo;