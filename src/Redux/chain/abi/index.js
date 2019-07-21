import * as Lock from './LibraryLock.json'
import * as LockDataLayout from './LibraryLockDataLayout.json'
import * as Owned from './Owned.json'
import * as Proxiable from './Proxiable.json'
import * as Proxy from './Proxy.json'
import * as SampleDataLayout from './SampleDataLayout.json'
import * as Sample from './Sample.json'

export default [
    ...Lock.abi,
    ...LockDataLayout.abi,
    ...Owned.abi,
    ...Proxiable.abi,
    ...Proxy.abi,
    ...SampleDataLayout.abi,
    ...Sample.abi
  ]