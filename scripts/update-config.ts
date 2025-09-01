// Copyright (C) 2025 Nicolas Meienberger
// 
// This file is part of usbhub95-runtipi-appstore.
// 
// usbhub95-runtipi-appstore is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// usbhub95-runtipi-appstore is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with usbhub95-runtipi-appstore.  If not, see <https://www.gnu.org/licenses/>.

import path from "node:path";
import fs from "fs/promises";

const packageFile = process.argv[2];
const newVersion = process.argv[3];

type AppConfig = {
  tipi_version: string;
  version: string;
  updated_at: number;
};

const updateAppConfig = async (packageFile: string, newVersion: string) => {
  try {
    const packageRoot = path.dirname(packageFile);
    const configPath = path.join(packageRoot, "config.json");

    const config = await fs.readFile(configPath, "utf-8");
    const configParsed = JSON.parse(config) as AppConfig;

    configParsed.tipi_version = configParsed.tipi_version + 1;
    configParsed.version = newVersion;
    configParsed.updated_at = new Date().getTime();

    await fs.writeFile(configPath, JSON.stringify(configParsed, null, 2));
  } catch (e) {
    console.error(`Failed to update app config, error: ${e}`);
  }
};

if (!packageFile || !newVersion) {
  console.error("Usage: node update-config.js <packageFile> <newVersion>");
  process.exit(1);
}
updateAppConfig(packageFile, newVersion);
