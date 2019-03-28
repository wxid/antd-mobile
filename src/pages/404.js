/*
 * @Author: Jan-superman
 * @Date: 2018-09-27 20:38:49
 * @Last Modified by:   Jan-superman
 * @Last Modified time: 2018-09-27 20:38:49
 */

import React from 'react';
import Link from 'umi/link';
import Exception from '@/components/Exception';



export default () => (
  <Exception type="4040" style={{minHeight: 300, height: '100%'}} linkElement={Link} backText="返回首页" />
);
