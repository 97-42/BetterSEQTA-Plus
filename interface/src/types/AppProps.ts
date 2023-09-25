export interface SettingsState {
  notificationCollector: boolean;
  lessonAlerts: boolean;
  animatedBackground: boolean;
  animatedBackgroundSpeed: string;
  customThemeColor: string;
  betterSEQTAPlus: boolean;
  shortcuts: Shortcut[];
  customshortcuts: CustomShortcut[];
}

interface ToggleItem {
  toggle: boolean;
}

interface Shortcut {
  enabled: boolean;
  name: string;
}

interface CustomShortcut {
  name: string;
  url: string;
}

export interface MainConfig {
  DarkMode: boolean;
  animatedbk: boolean;
  bksliderinput: string;
  customshortcuts: CustomShortcut[];
  defaultmenuorder: any[];
  lessonalert: boolean;
  menuitems: {
    assessments: ToggleItem;
    courses: ToggleItem;
    dashboard: ToggleItem;
    documents: ToggleItem;
    forums: ToggleItem;
    goals: ToggleItem;
    home: ToggleItem;
    messages: ToggleItem;
    myed: ToggleItem;
    news: ToggleItem;
    notices: ToggleItem;
    portals: ToggleItem;
    reports: ToggleItem;
    settings: ToggleItem;
    timetable: ToggleItem;
    welcome: ToggleItem;
  };
  menuorder: any[];
  notificationcollector: boolean;
  onoff: boolean;
  selectedColor: string;
  shortcuts: Shortcut[];
  subjectfilters: Record<string, any>;
}
