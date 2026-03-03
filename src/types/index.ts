export interface AppInfo {
  name: string
  version: string
  apkSize: string
  androidMinVersion: string
  downloadUrl: string
}

export interface DownloadButtonProps {
  label: string
  href: string
  loading?: boolean
  disabled?: boolean
}