var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1842 = root || request.c( 'UnityEngine.JointSpring' )
  var i1843 = data
  i1842.spring = i1843[0]
  i1842.damper = i1843[1]
  i1842.targetPosition = i1843[2]
  return i1842
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1844 = root || request.c( 'UnityEngine.JointMotor' )
  var i1845 = data
  i1844.m_TargetVelocity = i1845[0]
  i1844.m_Force = i1845[1]
  i1844.m_FreeSpin = i1845[2]
  return i1844
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1846 = root || request.c( 'UnityEngine.JointLimits' )
  var i1847 = data
  i1846.m_Min = i1847[0]
  i1846.m_Max = i1847[1]
  i1846.m_Bounciness = i1847[2]
  i1846.m_BounceMinVelocity = i1847[3]
  i1846.m_ContactDistance = i1847[4]
  i1846.minBounce = i1847[5]
  i1846.maxBounce = i1847[6]
  return i1846
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1848 = root || request.c( 'UnityEngine.JointDrive' )
  var i1849 = data
  i1848.m_PositionSpring = i1849[0]
  i1848.m_PositionDamper = i1849[1]
  i1848.m_MaximumForce = i1849[2]
  i1848.m_UseAcceleration = i1849[3]
  return i1848
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1850 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1851 = data
  i1850.m_Spring = i1851[0]
  i1850.m_Damper = i1851[1]
  return i1850
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1852 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1853 = data
  i1852.m_Limit = i1853[0]
  i1852.m_Bounciness = i1853[1]
  i1852.m_ContactDistance = i1853[2]
  return i1852
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1854 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1855 = data
  i1854.m_ExtremumSlip = i1855[0]
  i1854.m_ExtremumValue = i1855[1]
  i1854.m_AsymptoteSlip = i1855[2]
  i1854.m_AsymptoteValue = i1855[3]
  i1854.m_Stiffness = i1855[4]
  return i1854
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1856 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1857 = data
  i1856.m_LowerAngle = i1857[0]
  i1856.m_UpperAngle = i1857[1]
  return i1856
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1858 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1859 = data
  i1858.m_MotorSpeed = i1859[0]
  i1858.m_MaximumMotorTorque = i1859[1]
  return i1858
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1860 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1861 = data
  i1860.m_DampingRatio = i1861[0]
  i1860.m_Frequency = i1861[1]
  i1860.m_Angle = i1861[2]
  return i1860
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1862 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1863 = data
  i1862.m_LowerTranslation = i1863[0]
  i1862.m_UpperTranslation = i1863[1]
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1865 = data
  i1864.position = new pc.Vec3( i1865[0], i1865[1], i1865[2] )
  i1864.scale = new pc.Vec3( i1865[3], i1865[4], i1865[5] )
  i1864.rotation = new pc.Quat(i1865[6], i1865[7], i1865[8], i1865[9])
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1867 = data
  request.r(i1867[0], i1867[1], 0, i1866, 'sharedMesh')
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1869 = data
  request.r(i1869[0], i1869[1], 0, i1868, 'additionalVertexStreams')
  i1868.enabled = !!i1869[2]
  request.r(i1869[3], i1869[4], 0, i1868, 'sharedMaterial')
  var i1871 = i1869[5]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 2) {
  request.r(i1871[i + 0], i1871[i + 1], 2, i1870, '')
  }
  i1868.sharedMaterials = i1870
  i1868.receiveShadows = !!i1869[6]
  i1868.shadowCastingMode = i1869[7]
  i1868.sortingLayerID = i1869[8]
  i1868.sortingOrder = i1869[9]
  i1868.lightmapIndex = i1869[10]
  i1868.lightmapSceneIndex = i1869[11]
  i1868.lightmapScaleOffset = new pc.Vec4( i1869[12], i1869[13], i1869[14], i1869[15] )
  i1868.lightProbeUsage = i1869[16]
  i1868.reflectionProbeUsage = i1869[17]
  return i1868
}

Deserializers["Case"] = function (request, data, root) {
  var i1874 = root || request.c( 'Case' )
  var i1875 = data
  i1874.lineIndex = i1875[0]
  i1874.caseColor = new pc.Color(i1875[1], i1875[2], i1875[3], i1875[4])
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1877 = data
  i1876.name = i1877[0]
  i1876.tagId = i1877[1]
  i1876.enabled = !!i1877[2]
  i1876.isStatic = !!i1877[3]
  i1876.layer = i1877[4]
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1879 = data
  i1878.name = i1879[0]
  i1878.halfPrecision = !!i1879[1]
  i1878.useUInt32IndexFormat = !!i1879[2]
  i1878.vertexCount = i1879[3]
  i1878.aabb = i1879[4]
  var i1881 = i1879[5]
  var i1880 = []
  for(var i = 0; i < i1881.length; i += 1) {
    i1880.push( !!i1881[i + 0] );
  }
  i1878.streams = i1880
  i1878.vertices = i1879[6]
  var i1883 = i1879[7]
  var i1882 = []
  for(var i = 0; i < i1883.length; i += 1) {
    i1882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1883[i + 0]) );
  }
  i1878.subMeshes = i1882
  var i1885 = i1879[8]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 16) {
    i1884.push( new pc.Mat4().setData(i1885[i + 0], i1885[i + 1], i1885[i + 2], i1885[i + 3],  i1885[i + 4], i1885[i + 5], i1885[i + 6], i1885[i + 7],  i1885[i + 8], i1885[i + 9], i1885[i + 10], i1885[i + 11],  i1885[i + 12], i1885[i + 13], i1885[i + 14], i1885[i + 15]) );
  }
  i1878.bindposes = i1884
  var i1887 = i1879[9]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 1) {
    i1886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1887[i + 0]) );
  }
  i1878.blendShapes = i1886
  return i1878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1893 = data
  i1892.triangles = i1893[0]
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1899 = data
  i1898.name = i1899[0]
  var i1901 = i1899[1]
  var i1900 = []
  for(var i = 0; i < i1901.length; i += 1) {
    i1900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1901[i + 0]) );
  }
  i1898.frames = i1900
  return i1898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1902 = root || new pc.UnityMaterial()
  var i1903 = data
  i1902.name = i1903[0]
  request.r(i1903[1], i1903[2], 0, i1902, 'shader')
  i1902.renderQueue = i1903[3]
  i1902.enableInstancing = !!i1903[4]
  var i1905 = i1903[5]
  var i1904 = []
  for(var i = 0; i < i1905.length; i += 1) {
    i1904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1905[i + 0]) );
  }
  i1902.floatParameters = i1904
  var i1907 = i1903[6]
  var i1906 = []
  for(var i = 0; i < i1907.length; i += 1) {
    i1906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1907[i + 0]) );
  }
  i1902.colorParameters = i1906
  var i1909 = i1903[7]
  var i1908 = []
  for(var i = 0; i < i1909.length; i += 1) {
    i1908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1909[i + 0]) );
  }
  i1902.vectorParameters = i1908
  var i1911 = i1903[8]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 1) {
    i1910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1911[i + 0]) );
  }
  i1902.textureParameters = i1910
  var i1913 = i1903[9]
  var i1912 = []
  for(var i = 0; i < i1913.length; i += 1) {
    i1912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1913[i + 0]) );
  }
  i1902.materialFlags = i1912
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1917 = data
  i1916.name = i1917[0]
  i1916.value = i1917[1]
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1921 = data
  i1920.name = i1921[0]
  i1920.value = new pc.Color(i1921[1], i1921[2], i1921[3], i1921[4])
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1925 = data
  i1924.name = i1925[0]
  i1924.value = new pc.Vec4( i1925[1], i1925[2], i1925[3], i1925[4] )
  return i1924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1929 = data
  i1928.name = i1929[0]
  request.r(i1929[1], i1929[2], 0, i1928, 'value')
  return i1928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1933 = data
  i1932.name = i1933[0]
  i1932.enabled = !!i1933[1]
  return i1932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1935 = data
  i1934.center = new pc.Vec3( i1935[0], i1935[1], i1935[2] )
  i1934.size = new pc.Vec3( i1935[3], i1935[4], i1935[5] )
  i1934.enabled = !!i1935[6]
  i1934.isTrigger = !!i1935[7]
  request.r(i1935[8], i1935[9], 0, i1934, 'material')
  return i1934
}

Deserializers["Bottle"] = function (request, data, root) {
  var i1936 = root || request.c( 'Bottle' )
  var i1937 = data
  i1936.bottleColor = new pc.Color(i1937[0], i1937[1], i1937[2], i1937[3])
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1939 = data
  i1938.pivot = new pc.Vec2( i1939[0], i1939[1] )
  i1938.anchorMin = new pc.Vec2( i1939[2], i1939[3] )
  i1938.anchorMax = new pc.Vec2( i1939[4], i1939[5] )
  i1938.sizeDelta = new pc.Vec2( i1939[6], i1939[7] )
  i1938.anchoredPosition3D = new pc.Vec3( i1939[8], i1939[9], i1939[10] )
  i1938.rotation = new pc.Quat(i1939[11], i1939[12], i1939[13], i1939[14])
  i1938.scale = new pc.Vec3( i1939[15], i1939[16], i1939[17] )
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1941 = data
  i1940.cullTransparentMesh = !!i1941[0]
  return i1940
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1942 = root || request.c( 'UnityEngine.UI.Image' )
  var i1943 = data
  request.r(i1943[0], i1943[1], 0, i1942, 'm_Sprite')
  i1942.m_Type = i1943[2]
  i1942.m_PreserveAspect = !!i1943[3]
  i1942.m_FillCenter = !!i1943[4]
  i1942.m_FillMethod = i1943[5]
  i1942.m_FillAmount = i1943[6]
  i1942.m_FillClockwise = !!i1943[7]
  i1942.m_FillOrigin = i1943[8]
  i1942.m_UseSpriteMesh = !!i1943[9]
  i1942.m_PixelsPerUnitMultiplier = i1943[10]
  request.r(i1943[11], i1943[12], 0, i1942, 'm_Material')
  i1942.m_Maskable = !!i1943[13]
  i1942.m_Color = new pc.Color(i1943[14], i1943[15], i1943[16], i1943[17])
  i1942.m_RaycastTarget = !!i1943[18]
  i1942.m_RaycastPadding = new pc.Vec4( i1943[19], i1943[20], i1943[21], i1943[22] )
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1945 = data
  i1944.name = i1945[0]
  i1944.width = i1945[1]
  i1944.height = i1945[2]
  i1944.mipmapCount = i1945[3]
  i1944.anisoLevel = i1945[4]
  i1944.filterMode = i1945[5]
  i1944.hdr = !!i1945[6]
  i1944.format = i1945[7]
  i1944.wrapMode = i1945[8]
  i1944.alphaIsTransparency = !!i1945[9]
  i1944.alphaSource = i1945[10]
  i1944.graphicsFormat = i1945[11]
  i1944.sRGBTexture = !!i1945[12]
  i1944.desiredColorSpace = i1945[13]
  i1944.wrapU = i1945[14]
  i1944.wrapV = i1945[15]
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1947 = data
  i1946.name = i1947[0]
  i1946.atlasId = i1947[1]
  i1946.mipmapCount = i1947[2]
  i1946.hdr = !!i1947[3]
  i1946.size = i1947[4]
  i1946.anisoLevel = i1947[5]
  i1946.filterMode = i1947[6]
  var i1949 = i1947[7]
  var i1948 = []
  for(var i = 0; i < i1949.length; i += 4) {
    i1948.push( UnityEngine.Rect.MinMaxRect(i1949[i + 0], i1949[i + 1], i1949[i + 2], i1949[i + 3]) );
  }
  i1946.rects = i1948
  i1946.wrapU = i1947[8]
  i1946.wrapV = i1947[9]
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1953 = data
  i1952.name = i1953[0]
  i1952.index = i1953[1]
  i1952.startup = !!i1953[2]
  return i1952
}

Deserializers["PuzzleManager"] = function (request, data, root) {
  var i1954 = root || request.c( 'PuzzleManager' )
  var i1955 = data
  var i1957 = i1955[0]
  var i1956 = new (System.Collections.Generic.List$1(Bridge.ns('Case')))
  for(var i = 0; i < i1957.length; i += 2) {
  request.r(i1957[i + 0], i1957[i + 1], 1, i1956, '')
  }
  i1954.AllCases = i1956
  var i1959 = i1955[1]
  var i1958 = []
  for(var i = 0; i < i1959.length; i += 2) {
  request.r(i1959[i + 0], i1959[i + 1], 2, i1958, '')
  }
  i1954.goodEffectPrefabs = i1958
  request.r(i1955[2], i1955[3], 0, i1954, 'uiCanvas')
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1965 = data
  i1964.enabled = !!i1965[0]
  i1964.aspect = i1965[1]
  i1964.orthographic = !!i1965[2]
  i1964.orthographicSize = i1965[3]
  i1964.backgroundColor = new pc.Color(i1965[4], i1965[5], i1965[6], i1965[7])
  i1964.nearClipPlane = i1965[8]
  i1964.farClipPlane = i1965[9]
  i1964.fieldOfView = i1965[10]
  i1964.depth = i1965[11]
  i1964.clearFlags = i1965[12]
  i1964.cullingMask = i1965[13]
  i1964.rect = i1965[14]
  request.r(i1965[15], i1965[16], 0, i1964, 'targetTexture')
  i1964.usePhysicalProperties = !!i1965[17]
  i1964.focalLength = i1965[18]
  i1964.sensorSize = new pc.Vec2( i1965[19], i1965[20] )
  i1964.lensShift = new pc.Vec2( i1965[21], i1965[22] )
  i1964.gateFit = i1965[23]
  i1964.commandBufferCount = i1965[24]
  i1964.cameraType = i1965[25]
  return i1964
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i1966 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i1967 = data
  i1966.m_RenderShadows = !!i1967[0]
  i1966.m_RequiresDepthTextureOption = i1967[1]
  i1966.m_RequiresOpaqueTextureOption = i1967[2]
  i1966.m_CameraType = i1967[3]
  var i1969 = i1967[4]
  var i1968 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i1969.length; i += 2) {
  request.r(i1969[i + 0], i1969[i + 1], 1, i1968, '')
  }
  i1966.m_Cameras = i1968
  i1966.m_RendererIndex = i1967[5]
  i1966.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i1967[6] )
  request.r(i1967[7], i1967[8], 0, i1966, 'm_VolumeTrigger')
  i1966.m_VolumeFrameworkUpdateModeOption = i1967[9]
  i1966.m_RenderPostProcessing = !!i1967[10]
  i1966.m_Antialiasing = i1967[11]
  i1966.m_AntialiasingQuality = i1967[12]
  i1966.m_StopNaN = !!i1967[13]
  i1966.m_Dithering = !!i1967[14]
  i1966.m_ClearDepth = !!i1967[15]
  i1966.m_AllowXRRendering = !!i1967[16]
  i1966.m_AllowHDROutput = !!i1967[17]
  i1966.m_UseScreenCoordOverride = !!i1967[18]
  i1966.m_ScreenSizeOverride = new pc.Vec4( i1967[19], i1967[20], i1967[21], i1967[22] )
  i1966.m_ScreenCoordScaleBias = new pc.Vec4( i1967[23], i1967[24], i1967[25], i1967[26] )
  i1966.m_RequiresDepthTexture = !!i1967[27]
  i1966.m_RequiresColorTexture = !!i1967[28]
  i1966.m_Version = i1967[29]
  i1966.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i1967[30], i1966.m_TaaSettings)
  return i1966
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i1972 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i1973 = data
  i1972.m_Quality = i1973[0]
  i1972.m_FrameInfluence = i1973[1]
  i1972.m_JitterScale = i1973[2]
  i1972.m_MipBias = i1973[3]
  i1972.m_VarianceClampScale = i1973[4]
  i1972.m_ContrastAdaptiveSharpening = i1973[5]
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1975 = data
  i1974.enabled = !!i1975[0]
  i1974.planeDistance = i1975[1]
  i1974.referencePixelsPerUnit = i1975[2]
  i1974.isFallbackOverlay = !!i1975[3]
  i1974.renderMode = i1975[4]
  i1974.renderOrder = i1975[5]
  i1974.sortingLayerName = i1975[6]
  i1974.sortingOrder = i1975[7]
  i1974.scaleFactor = i1975[8]
  request.r(i1975[9], i1975[10], 0, i1974, 'worldCamera')
  i1974.overrideSorting = !!i1975[11]
  i1974.pixelPerfect = !!i1975[12]
  i1974.targetDisplay = i1975[13]
  i1974.overridePixelPerfect = !!i1975[14]
  return i1974
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1976 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1977 = data
  i1976.m_UiScaleMode = i1977[0]
  i1976.m_ReferencePixelsPerUnit = i1977[1]
  i1976.m_ScaleFactor = i1977[2]
  i1976.m_ReferenceResolution = new pc.Vec2( i1977[3], i1977[4] )
  i1976.m_ScreenMatchMode = i1977[5]
  i1976.m_MatchWidthOrHeight = i1977[6]
  i1976.m_PhysicalUnit = i1977[7]
  i1976.m_FallbackScreenDPI = i1977[8]
  i1976.m_DefaultSpriteDPI = i1977[9]
  i1976.m_DynamicPixelsPerUnit = i1977[10]
  i1976.m_PresetInfoIsWorld = !!i1977[11]
  return i1976
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1978 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1979 = data
  i1978.m_IgnoreReversedGraphics = !!i1979[0]
  i1978.m_BlockingObjects = i1979[1]
  i1978.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1979[2] )
  return i1978
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1980 = root || request.c( 'UnityEngine.UI.Button' )
  var i1981 = data
  i1980.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1981[0], i1980.m_OnClick)
  i1980.m_Navigation = request.d('UnityEngine.UI.Navigation', i1981[1], i1980.m_Navigation)
  i1980.m_Transition = i1981[2]
  i1980.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1981[3], i1980.m_Colors)
  i1980.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1981[4], i1980.m_SpriteState)
  i1980.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1981[5], i1980.m_AnimationTriggers)
  i1980.m_Interactable = !!i1981[6]
  request.r(i1981[7], i1981[8], 0, i1980, 'm_TargetGraphic')
  return i1980
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1982 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1983 = data
  i1982.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1983[0], i1982.m_PersistentCalls)
  return i1982
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1984 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1985 = data
  var i1987 = i1985[0]
  var i1986 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1987.length; i += 1) {
    i1986.add(request.d('UnityEngine.Events.PersistentCall', i1987[i + 0]));
  }
  i1984.m_Calls = i1986
  return i1984
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1990 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1991 = data
  request.r(i1991[0], i1991[1], 0, i1990, 'm_Target')
  i1990.m_TargetAssemblyTypeName = i1991[2]
  i1990.m_MethodName = i1991[3]
  i1990.m_Mode = i1991[4]
  i1990.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1991[5], i1990.m_Arguments)
  i1990.m_CallState = i1991[6]
  return i1990
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1992 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1993 = data
  i1992.m_Mode = i1993[0]
  i1992.m_WrapAround = !!i1993[1]
  request.r(i1993[2], i1993[3], 0, i1992, 'm_SelectOnUp')
  request.r(i1993[4], i1993[5], 0, i1992, 'm_SelectOnDown')
  request.r(i1993[6], i1993[7], 0, i1992, 'm_SelectOnLeft')
  request.r(i1993[8], i1993[9], 0, i1992, 'm_SelectOnRight')
  return i1992
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1994 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1995 = data
  i1994.m_NormalColor = new pc.Color(i1995[0], i1995[1], i1995[2], i1995[3])
  i1994.m_HighlightedColor = new pc.Color(i1995[4], i1995[5], i1995[6], i1995[7])
  i1994.m_PressedColor = new pc.Color(i1995[8], i1995[9], i1995[10], i1995[11])
  i1994.m_SelectedColor = new pc.Color(i1995[12], i1995[13], i1995[14], i1995[15])
  i1994.m_DisabledColor = new pc.Color(i1995[16], i1995[17], i1995[18], i1995[19])
  i1994.m_ColorMultiplier = i1995[20]
  i1994.m_FadeDuration = i1995[21]
  return i1994
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1996 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1997 = data
  request.r(i1997[0], i1997[1], 0, i1996, 'm_HighlightedSprite')
  request.r(i1997[2], i1997[3], 0, i1996, 'm_PressedSprite')
  request.r(i1997[4], i1997[5], 0, i1996, 'm_SelectedSprite')
  request.r(i1997[6], i1997[7], 0, i1996, 'm_DisabledSprite')
  return i1996
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1998 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1999 = data
  i1998.m_NormalTrigger = i1999[0]
  i1998.m_HighlightedTrigger = i1999[1]
  i1998.m_PressedTrigger = i1999[2]
  i1998.m_SelectedTrigger = i1999[3]
  i1998.m_DisabledTrigger = i1999[4]
  return i1998
}

Deserializers["ButtonPulse"] = function (request, data, root) {
  var i2000 = root || request.c( 'ButtonPulse' )
  var i2001 = data
  i2000.scaleMultiplier = i2001[0]
  i2000.duration = i2001[1]
  return i2000
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2002 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2003 = data
  i2002.m_hasFontAssetChanged = !!i2003[0]
  request.r(i2003[1], i2003[2], 0, i2002, 'm_baseMaterial')
  i2002.m_maskOffset = new pc.Vec4( i2003[3], i2003[4], i2003[5], i2003[6] )
  i2002.m_text = i2003[7]
  i2002.m_isRightToLeft = !!i2003[8]
  request.r(i2003[9], i2003[10], 0, i2002, 'm_fontAsset')
  request.r(i2003[11], i2003[12], 0, i2002, 'm_sharedMaterial')
  var i2005 = i2003[13]
  var i2004 = []
  for(var i = 0; i < i2005.length; i += 2) {
  request.r(i2005[i + 0], i2005[i + 1], 2, i2004, '')
  }
  i2002.m_fontSharedMaterials = i2004
  request.r(i2003[14], i2003[15], 0, i2002, 'm_fontMaterial')
  var i2007 = i2003[16]
  var i2006 = []
  for(var i = 0; i < i2007.length; i += 2) {
  request.r(i2007[i + 0], i2007[i + 1], 2, i2006, '')
  }
  i2002.m_fontMaterials = i2006
  i2002.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2003[17], i2003[18], i2003[19], i2003[20])
  i2002.m_fontColor = new pc.Color(i2003[21], i2003[22], i2003[23], i2003[24])
  i2002.m_enableVertexGradient = !!i2003[25]
  i2002.m_colorMode = i2003[26]
  i2002.m_fontColorGradient = request.d('TMPro.VertexGradient', i2003[27], i2002.m_fontColorGradient)
  request.r(i2003[28], i2003[29], 0, i2002, 'm_fontColorGradientPreset')
  request.r(i2003[30], i2003[31], 0, i2002, 'm_spriteAsset')
  i2002.m_tintAllSprites = !!i2003[32]
  request.r(i2003[33], i2003[34], 0, i2002, 'm_StyleSheet')
  i2002.m_TextStyleHashCode = i2003[35]
  i2002.m_overrideHtmlColors = !!i2003[36]
  i2002.m_faceColor = UnityEngine.Color32.ConstructColor(i2003[37], i2003[38], i2003[39], i2003[40])
  i2002.m_fontSize = i2003[41]
  i2002.m_fontSizeBase = i2003[42]
  i2002.m_fontWeight = i2003[43]
  i2002.m_enableAutoSizing = !!i2003[44]
  i2002.m_fontSizeMin = i2003[45]
  i2002.m_fontSizeMax = i2003[46]
  i2002.m_fontStyle = i2003[47]
  i2002.m_HorizontalAlignment = i2003[48]
  i2002.m_VerticalAlignment = i2003[49]
  i2002.m_textAlignment = i2003[50]
  i2002.m_characterSpacing = i2003[51]
  i2002.m_wordSpacing = i2003[52]
  i2002.m_lineSpacing = i2003[53]
  i2002.m_lineSpacingMax = i2003[54]
  i2002.m_paragraphSpacing = i2003[55]
  i2002.m_charWidthMaxAdj = i2003[56]
  i2002.m_enableWordWrapping = !!i2003[57]
  i2002.m_wordWrappingRatios = i2003[58]
  i2002.m_overflowMode = i2003[59]
  request.r(i2003[60], i2003[61], 0, i2002, 'm_linkedTextComponent')
  request.r(i2003[62], i2003[63], 0, i2002, 'parentLinkedComponent')
  i2002.m_enableKerning = !!i2003[64]
  i2002.m_enableExtraPadding = !!i2003[65]
  i2002.checkPaddingRequired = !!i2003[66]
  i2002.m_isRichText = !!i2003[67]
  i2002.m_parseCtrlCharacters = !!i2003[68]
  i2002.m_isOrthographic = !!i2003[69]
  i2002.m_isCullingEnabled = !!i2003[70]
  i2002.m_horizontalMapping = i2003[71]
  i2002.m_verticalMapping = i2003[72]
  i2002.m_uvLineOffset = i2003[73]
  i2002.m_geometrySortingOrder = i2003[74]
  i2002.m_IsTextObjectScaleStatic = !!i2003[75]
  i2002.m_VertexBufferAutoSizeReduction = !!i2003[76]
  i2002.m_useMaxVisibleDescender = !!i2003[77]
  i2002.m_pageToDisplay = i2003[78]
  i2002.m_margin = new pc.Vec4( i2003[79], i2003[80], i2003[81], i2003[82] )
  i2002.m_isUsingLegacyAnimationComponent = !!i2003[83]
  i2002.m_isVolumetricText = !!i2003[84]
  request.r(i2003[85], i2003[86], 0, i2002, 'm_Material')
  i2002.m_Maskable = !!i2003[87]
  i2002.m_Color = new pc.Color(i2003[88], i2003[89], i2003[90], i2003[91])
  i2002.m_RaycastTarget = !!i2003[92]
  i2002.m_RaycastPadding = new pc.Vec4( i2003[93], i2003[94], i2003[95], i2003[96] )
  return i2002
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2008 = root || request.c( 'TMPro.VertexGradient' )
  var i2009 = data
  i2008.topLeft = new pc.Color(i2009[0], i2009[1], i2009[2], i2009[3])
  i2008.topRight = new pc.Color(i2009[4], i2009[5], i2009[6], i2009[7])
  i2008.bottomLeft = new pc.Color(i2009[8], i2009[9], i2009[10], i2009[11])
  i2008.bottomRight = new pc.Color(i2009[12], i2009[13], i2009[14], i2009[15])
  return i2008
}

Deserializers["TextHint"] = function (request, data, root) {
  var i2010 = root || request.c( 'TextHint' )
  var i2011 = data
  request.r(i2011[0], i2011[1], 0, i2010, 'hintText')
  i2010.scaleAmount = i2011[2]
  i2010.duration = i2011[3]
  return i2010
}

Deserializers["TimerSlider"] = function (request, data, root) {
  var i2012 = root || request.c( 'TimerSlider' )
  var i2013 = data
  request.r(i2013[0], i2013[1], 0, i2012, 'timerSlider')
  i2012.totalTime = i2013[2]
  request.r(i2013[3], i2013[4], 0, i2012, 'resultPanel')
  return i2012
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2014 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2015 = data
  request.r(i2015[0], i2015[1], 0, i2014, 'm_FillRect')
  request.r(i2015[2], i2015[3], 0, i2014, 'm_HandleRect')
  i2014.m_Direction = i2015[4]
  i2014.m_MinValue = i2015[5]
  i2014.m_MaxValue = i2015[6]
  i2014.m_WholeNumbers = !!i2015[7]
  i2014.m_Value = i2015[8]
  i2014.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2015[9], i2014.m_OnValueChanged)
  i2014.m_Navigation = request.d('UnityEngine.UI.Navigation', i2015[10], i2014.m_Navigation)
  i2014.m_Transition = i2015[11]
  i2014.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2015[12], i2014.m_Colors)
  i2014.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2015[13], i2014.m_SpriteState)
  i2014.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2015[14], i2014.m_AnimationTriggers)
  i2014.m_Interactable = !!i2015[15]
  request.r(i2015[16], i2015[17], 0, i2014, 'm_TargetGraphic')
  return i2014
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2016 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2017 = data
  i2016.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2017[0], i2016.m_PersistentCalls)
  return i2016
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i2018 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i2019 = data
  i2018.priority = i2019[0]
  i2018.blendDistance = i2019[1]
  i2018.weight = i2019[2]
  request.r(i2019[3], i2019[4], 0, i2018, 'sharedProfile')
  i2018.m_IsGlobal = !!i2019[5]
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2021 = data
  i2020.enabled = !!i2021[0]
  i2020.type = i2021[1]
  i2020.color = new pc.Color(i2021[2], i2021[3], i2021[4], i2021[5])
  i2020.cullingMask = i2021[6]
  i2020.intensity = i2021[7]
  i2020.range = i2021[8]
  i2020.spotAngle = i2021[9]
  i2020.shadows = i2021[10]
  i2020.shadowNormalBias = i2021[11]
  i2020.shadowBias = i2021[12]
  i2020.shadowStrength = i2021[13]
  i2020.shadowResolution = i2021[14]
  i2020.lightmapBakeType = i2021[15]
  i2020.renderMode = i2021[16]
  request.r(i2021[17], i2021[18], 0, i2020, 'cookie')
  i2020.cookieSize = i2021[19]
  return i2020
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i2022 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i2023 = data
  i2022.m_Version = i2023[0]
  i2022.m_UsePipelineSettings = !!i2023[1]
  i2022.m_AdditionalLightsShadowResolutionTier = i2023[2]
  i2022.m_LightLayerMask = i2023[3]
  i2022.m_RenderingLayers = i2023[4]
  i2022.m_CustomShadowLayers = !!i2023[5]
  i2022.m_ShadowLayerMask = i2023[6]
  i2022.m_ShadowRenderingLayers = i2023[7]
  i2022.m_LightCookieSize = new pc.Vec2( i2023[8], i2023[9] )
  i2022.m_LightCookieOffset = new pc.Vec2( i2023[10], i2023[11] )
  i2022.m_SoftShadowQuality = i2023[12]
  return i2022
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2024 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2025 = data
  request.r(i2025[0], i2025[1], 0, i2024, 'm_FirstSelected')
  i2024.m_sendNavigationEvents = !!i2025[2]
  i2024.m_DragThreshold = i2025[3]
  return i2024
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2026 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2027 = data
  i2026.m_HorizontalAxis = i2027[0]
  i2026.m_VerticalAxis = i2027[1]
  i2026.m_SubmitButton = i2027[2]
  i2026.m_CancelButton = i2027[3]
  i2026.m_InputActionsPerSecond = i2027[4]
  i2026.m_RepeatDelay = i2027[5]
  i2026.m_ForceModuleActive = !!i2027[6]
  i2026.m_SendPointerHoverToParent = !!i2027[7]
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2029 = data
  i2028.ambientIntensity = i2029[0]
  i2028.reflectionIntensity = i2029[1]
  i2028.ambientMode = i2029[2]
  i2028.ambientLight = new pc.Color(i2029[3], i2029[4], i2029[5], i2029[6])
  i2028.ambientSkyColor = new pc.Color(i2029[7], i2029[8], i2029[9], i2029[10])
  i2028.ambientGroundColor = new pc.Color(i2029[11], i2029[12], i2029[13], i2029[14])
  i2028.ambientEquatorColor = new pc.Color(i2029[15], i2029[16], i2029[17], i2029[18])
  i2028.fogColor = new pc.Color(i2029[19], i2029[20], i2029[21], i2029[22])
  i2028.fogEndDistance = i2029[23]
  i2028.fogStartDistance = i2029[24]
  i2028.fogDensity = i2029[25]
  i2028.fog = !!i2029[26]
  request.r(i2029[27], i2029[28], 0, i2028, 'skybox')
  i2028.fogMode = i2029[29]
  var i2031 = i2029[30]
  var i2030 = []
  for(var i = 0; i < i2031.length; i += 1) {
    i2030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2031[i + 0]) );
  }
  i2028.lightmaps = i2030
  i2028.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2029[31], i2028.lightProbes)
  i2028.lightmapsMode = i2029[32]
  i2028.mixedBakeMode = i2029[33]
  i2028.environmentLightingMode = i2029[34]
  i2028.ambientProbe = new pc.SphericalHarmonicsL2(i2029[35])
  i2028.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2029[36])
  i2028.useReferenceAmbientProbe = !!i2029[37]
  request.r(i2029[38], i2029[39], 0, i2028, 'customReflection')
  request.r(i2029[40], i2029[41], 0, i2028, 'defaultReflection')
  i2028.defaultReflectionMode = i2029[42]
  i2028.defaultReflectionResolution = i2029[43]
  i2028.sunLightObjectId = i2029[44]
  i2028.pixelLightCount = i2029[45]
  i2028.defaultReflectionHDR = !!i2029[46]
  i2028.hasLightDataAsset = !!i2029[47]
  i2028.hasManualGenerate = !!i2029[48]
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2035 = data
  request.r(i2035[0], i2035[1], 0, i2034, 'lightmapColor')
  request.r(i2035[2], i2035[3], 0, i2034, 'lightmapDirection')
  return i2034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2036 = root || new UnityEngine.LightProbes()
  var i2037 = data
  return i2036
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i2044 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i2045 = data
  request.r(i2045[0], i2045[1], 0, i2044, 'panelPrefab')
  var i2047 = i2045[2]
  var i2046 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i2047.length; i += 1) {
    i2046.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i2047[i + 0]));
  }
  i2044.prefabs = i2046
  return i2044
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i2050 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i2051 = data
  i2050.type = i2051[0]
  request.r(i2051[1], i2051[2], 0, i2050, 'prefab')
  return i2050
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i2052 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i2053 = data
  i2052.m_Spacing = i2053[0]
  i2052.m_ChildForceExpandWidth = !!i2053[1]
  i2052.m_ChildForceExpandHeight = !!i2053[2]
  i2052.m_ChildControlWidth = !!i2053[3]
  i2052.m_ChildControlHeight = !!i2053[4]
  i2052.m_ChildScaleWidth = !!i2053[5]
  i2052.m_ChildScaleHeight = !!i2053[6]
  i2052.m_ReverseArrangement = !!i2053[7]
  i2052.m_Padding = UnityEngine.RectOffset.FromPaddings(i2053[8], i2053[9], i2053[10], i2053[11])
  i2052.m_ChildAlignment = i2053[12]
  return i2052
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i2054 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i2055 = data
  i2054.m_HorizontalFit = i2055[0]
  i2054.m_VerticalFit = i2055[1]
  return i2054
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i2056 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i2057 = data
  request.r(i2057[0], i2057[1], 0, i2056, 'contentHolder')
  return i2056
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i2058 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i2059 = data
  request.r(i2059[0], i2059[1], 0, i2058, 'nameLabel')
  request.r(i2059[2], i2059[3], 0, i2058, 'scrollRect')
  request.r(i2059[4], i2059[5], 0, i2058, 'viewport')
  request.r(i2059[6], i2059[7], 0, i2058, 'Canvas')
  return i2058
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i2060 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i2061 = data
  i2060.m_IgnoreLayout = !!i2061[0]
  i2060.m_MinWidth = i2061[1]
  i2060.m_MinHeight = i2061[2]
  i2060.m_PreferredWidth = i2061[3]
  i2060.m_PreferredHeight = i2061[4]
  i2060.m_FlexibleWidth = i2061[5]
  i2060.m_FlexibleHeight = i2061[6]
  i2060.m_LayoutPriority = i2061[7]
  return i2060
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2062 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2063 = data
  request.r(i2063[0], i2063[1], 0, i2062, 'm_ObjectArgument')
  i2062.m_ObjectArgumentAssemblyTypeName = i2063[2]
  i2062.m_IntArgument = i2063[3]
  i2062.m_FloatArgument = i2063[4]
  i2062.m_StringArgument = i2063[5]
  i2062.m_BoolArgument = !!i2063[6]
  return i2062
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2064 = root || request.c( 'UnityEngine.UI.Text' )
  var i2065 = data
  i2064.m_FontData = request.d('UnityEngine.UI.FontData', i2065[0], i2064.m_FontData)
  i2064.m_Text = i2065[1]
  request.r(i2065[2], i2065[3], 0, i2064, 'm_Material')
  i2064.m_Maskable = !!i2065[4]
  i2064.m_Color = new pc.Color(i2065[5], i2065[6], i2065[7], i2065[8])
  i2064.m_RaycastTarget = !!i2065[9]
  i2064.m_RaycastPadding = new pc.Vec4( i2065[10], i2065[11], i2065[12], i2065[13] )
  return i2064
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2066 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2067 = data
  request.r(i2067[0], i2067[1], 0, i2066, 'm_Font')
  i2066.m_FontSize = i2067[2]
  i2066.m_FontStyle = i2067[3]
  i2066.m_BestFit = !!i2067[4]
  i2066.m_MinSize = i2067[5]
  i2066.m_MaxSize = i2067[6]
  i2066.m_Alignment = i2067[7]
  i2066.m_AlignByGeometry = !!i2067[8]
  i2066.m_RichText = !!i2067[9]
  i2066.m_HorizontalOverflow = i2067[10]
  i2066.m_VerticalOverflow = i2067[11]
  i2066.m_LineSpacing = i2067[12]
  return i2066
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i2068 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i2069 = data
  request.r(i2069[0], i2069[1], 0, i2068, 'm_Content')
  i2068.m_Horizontal = !!i2069[2]
  i2068.m_Vertical = !!i2069[3]
  i2068.m_MovementType = i2069[4]
  i2068.m_Elasticity = i2069[5]
  i2068.m_Inertia = !!i2069[6]
  i2068.m_DecelerationRate = i2069[7]
  i2068.m_ScrollSensitivity = i2069[8]
  request.r(i2069[9], i2069[10], 0, i2068, 'm_Viewport')
  request.r(i2069[11], i2069[12], 0, i2068, 'm_HorizontalScrollbar')
  request.r(i2069[13], i2069[14], 0, i2068, 'm_VerticalScrollbar')
  i2068.m_HorizontalScrollbarVisibility = i2069[15]
  i2068.m_VerticalScrollbarVisibility = i2069[16]
  i2068.m_HorizontalScrollbarSpacing = i2069[17]
  i2068.m_VerticalScrollbarSpacing = i2069[18]
  i2068.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i2069[19], i2068.m_OnValueChanged)
  return i2068
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i2070 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i2071 = data
  i2070.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2071[0], i2070.m_PersistentCalls)
  return i2070
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2072 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2073 = data
  i2072.m_ShowMaskGraphic = !!i2073[0]
  return i2072
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i2074 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i2075 = data
  request.r(i2075[0], i2075[1], 0, i2074, 'm_HandleRect')
  i2074.m_Direction = i2075[2]
  i2074.m_Value = i2075[3]
  i2074.m_Size = i2075[4]
  i2074.m_NumberOfSteps = i2075[5]
  i2074.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i2075[6], i2074.m_OnValueChanged)
  i2074.m_Navigation = request.d('UnityEngine.UI.Navigation', i2075[7], i2074.m_Navigation)
  i2074.m_Transition = i2075[8]
  i2074.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2075[9], i2074.m_Colors)
  i2074.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2075[10], i2074.m_SpriteState)
  i2074.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2075[11], i2074.m_AnimationTriggers)
  i2074.m_Interactable = !!i2075[12]
  request.r(i2075[13], i2075[14], 0, i2074, 'm_TargetGraphic')
  return i2074
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i2076 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i2077 = data
  i2076.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2077[0], i2076.m_PersistentCalls)
  return i2076
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i2078 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i2079 = data
  var i2081 = i2079[0]
  var i2080 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i2081.length; i += 1) {
    i2080.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i2081[i + 0]));
  }
  i2078.m_Delegates = i2080
  return i2078
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i2084 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i2085 = data
  i2084.eventID = i2085[0]
  i2084.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i2085[1], i2084.callback)
  return i2084
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i2086 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i2087 = data
  i2086.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2087[0], i2086.m_PersistentCalls)
  return i2086
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i2088 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i2089 = data
  request.r(i2089[0], i2089[1], 0, i2088, 'nameLabel')
  request.r(i2089[2], i2089[3], 0, i2088, 'valueLabel')
  i2088.colorDefault = new pc.Color(i2089[4], i2089[5], i2089[6], i2089[7])
  i2088.colorSelected = new pc.Color(i2089[8], i2089[9], i2089[10], i2089[11])
  return i2088
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i2090 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i2091 = data
  request.r(i2091[0], i2091[1], 0, i2090, 'nameLabel')
  request.r(i2091[2], i2091[3], 0, i2090, 'valueToggle')
  request.r(i2091[4], i2091[5], 0, i2090, 'checkmarkImage')
  i2090.colorDefault = new pc.Color(i2091[6], i2091[7], i2091[8], i2091[9])
  i2090.colorSelected = new pc.Color(i2091[10], i2091[11], i2091[12], i2091[13])
  return i2090
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i2092 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i2093 = data
  i2092.toggleTransition = i2093[0]
  request.r(i2093[1], i2093[2], 0, i2092, 'graphic')
  i2092.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i2093[3], i2092.onValueChanged)
  request.r(i2093[4], i2093[5], 0, i2092, 'm_Group')
  i2092.m_IsOn = !!i2093[6]
  i2092.m_Navigation = request.d('UnityEngine.UI.Navigation', i2093[7], i2092.m_Navigation)
  i2092.m_Transition = i2093[8]
  i2092.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2093[9], i2092.m_Colors)
  i2092.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2093[10], i2092.m_SpriteState)
  i2092.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2093[11], i2092.m_AnimationTriggers)
  i2092.m_Interactable = !!i2093[12]
  request.r(i2093[13], i2093[14], 0, i2092, 'm_TargetGraphic')
  return i2092
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i2094 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i2095 = data
  i2094.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2095[0], i2094.m_PersistentCalls)
  return i2094
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i2096 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i2097 = data
  request.r(i2097[0], i2097[1], 0, i2096, 'nameLabel')
  request.r(i2097[2], i2097[3], 0, i2096, 'valueLabel')
  i2096.colorDefault = new pc.Color(i2097[4], i2097[5], i2097[6], i2097[7])
  i2096.colorSelected = new pc.Color(i2097[8], i2097[9], i2097[10], i2097[11])
  return i2096
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i2098 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i2099 = data
  request.r(i2099[0], i2099[1], 0, i2098, 'nameLabel')
  request.r(i2099[2], i2099[3], 0, i2098, 'valueLabel')
  i2098.colorDefault = new pc.Color(i2099[4], i2099[5], i2099[6], i2099[7])
  i2098.colorSelected = new pc.Color(i2099[8], i2099[9], i2099[10], i2099[11])
  return i2098
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i2100 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i2101 = data
  request.r(i2101[0], i2101[1], 0, i2100, 'nameLabel')
  request.r(i2101[2], i2101[3], 0, i2100, 'valueLabel')
  i2100.colorDefault = new pc.Color(i2101[4], i2101[5], i2101[6], i2101[7])
  i2100.colorSelected = new pc.Color(i2101[8], i2101[9], i2101[10], i2101[11])
  return i2100
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i2102 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i2103 = data
  request.r(i2103[0], i2103[1], 0, i2102, 'nextButtonText')
  request.r(i2103[2], i2103[3], 0, i2102, 'previousButtonText')
  request.r(i2103[4], i2103[5], 0, i2102, 'nameLabel')
  request.r(i2103[6], i2103[7], 0, i2102, 'valueLabel')
  i2102.colorDefault = new pc.Color(i2103[8], i2103[9], i2103[10], i2103[11])
  i2102.colorSelected = new pc.Color(i2103[12], i2103[13], i2103[14], i2103[15])
  return i2102
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i2104 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i2105 = data
  request.r(i2105[0], i2105[1], 0, i2104, 'nameLabel')
  i2104.colorDefault = new pc.Color(i2105[2], i2105[3], i2105[4], i2105[5])
  i2104.colorSelected = new pc.Color(i2105[6], i2105[7], i2105[8], i2105[9])
  return i2104
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i2106 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i2107 = data
  request.r(i2107[0], i2107[1], 0, i2106, 'nameLabel')
  request.r(i2107[2], i2107[3], 0, i2106, 'valueToggle')
  i2106.colorDefault = new pc.Color(i2107[4], i2107[5], i2107[6], i2107[7])
  i2106.colorSelected = new pc.Color(i2107[8], i2107[9], i2107[10], i2107[11])
  return i2106
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i2108 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i2109 = data
  i2108.toggleTransition = i2109[0]
  request.r(i2109[1], i2109[2], 0, i2108, 'graphic')
  i2108.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i2109[3], i2108.onValueChanged)
  request.r(i2109[4], i2109[5], 0, i2108, 'content')
  request.r(i2109[6], i2109[7], 0, i2108, 'arrowOpened')
  request.r(i2109[8], i2109[9], 0, i2108, 'arrowClosed')
  request.r(i2109[10], i2109[11], 0, i2108, 'm_Group')
  i2108.m_IsOn = !!i2109[12]
  i2108.m_Navigation = request.d('UnityEngine.UI.Navigation', i2109[13], i2108.m_Navigation)
  i2108.m_Transition = i2109[14]
  i2108.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2109[15], i2108.m_Colors)
  i2108.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2109[16], i2108.m_SpriteState)
  i2108.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2109[17], i2108.m_AnimationTriggers)
  i2108.m_Interactable = !!i2109[18]
  request.r(i2109[19], i2109[20], 0, i2108, 'm_TargetGraphic')
  return i2108
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i2110 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i2111 = data
  request.r(i2111[0], i2111[1], 0, i2110, 'nameLabel')
  request.r(i2111[2], i2111[3], 0, i2110, 'valueToggle')
  request.r(i2111[4], i2111[5], 0, i2110, 'colorImage')
  request.r(i2111[6], i2111[7], 0, i2110, 'fieldR')
  request.r(i2111[8], i2111[9], 0, i2110, 'fieldG')
  request.r(i2111[10], i2111[11], 0, i2110, 'fieldB')
  request.r(i2111[12], i2111[13], 0, i2110, 'fieldA')
  i2110.colorDefault = new pc.Color(i2111[14], i2111[15], i2111[16], i2111[17])
  i2110.colorSelected = new pc.Color(i2111[18], i2111[19], i2111[20], i2111[21])
  return i2110
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i2112 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i2113 = data
  request.r(i2113[0], i2113[1], 0, i2112, 'nameLabel')
  request.r(i2113[2], i2113[3], 0, i2112, 'valueLabel')
  i2112.colorDefault = new pc.Color(i2113[4], i2113[5], i2113[6], i2113[7])
  i2112.colorSelected = new pc.Color(i2113[8], i2113[9], i2113[10], i2113[11])
  return i2112
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i2114 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i2115 = data
  request.r(i2115[0], i2115[1], 0, i2114, 'nameLabel')
  request.r(i2115[2], i2115[3], 0, i2114, 'valueToggle')
  request.r(i2115[4], i2115[5], 0, i2114, 'fieldX')
  request.r(i2115[6], i2115[7], 0, i2114, 'fieldY')
  i2114.colorDefault = new pc.Color(i2115[8], i2115[9], i2115[10], i2115[11])
  i2114.colorSelected = new pc.Color(i2115[12], i2115[13], i2115[14], i2115[15])
  return i2114
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i2116 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i2117 = data
  request.r(i2117[0], i2117[1], 0, i2116, 'nameLabel')
  request.r(i2117[2], i2117[3], 0, i2116, 'valueToggle')
  request.r(i2117[4], i2117[5], 0, i2116, 'fieldX')
  request.r(i2117[6], i2117[7], 0, i2116, 'fieldY')
  request.r(i2117[8], i2117[9], 0, i2116, 'fieldZ')
  i2116.colorDefault = new pc.Color(i2117[10], i2117[11], i2117[12], i2117[13])
  i2116.colorSelected = new pc.Color(i2117[14], i2117[15], i2117[16], i2117[17])
  return i2116
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i2118 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i2119 = data
  request.r(i2119[0], i2119[1], 0, i2118, 'nameLabel')
  request.r(i2119[2], i2119[3], 0, i2118, 'valueToggle')
  request.r(i2119[4], i2119[5], 0, i2118, 'fieldX')
  request.r(i2119[6], i2119[7], 0, i2118, 'fieldY')
  request.r(i2119[8], i2119[9], 0, i2118, 'fieldZ')
  request.r(i2119[10], i2119[11], 0, i2118, 'fieldW')
  i2118.colorDefault = new pc.Color(i2119[12], i2119[13], i2119[14], i2119[15])
  i2118.colorSelected = new pc.Color(i2119[16], i2119[17], i2119[18], i2119[19])
  return i2118
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i2120 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i2121 = data
  i2120.colorDefault = new pc.Color(i2121[0], i2121[1], i2121[2], i2121[3])
  i2120.colorSelected = new pc.Color(i2121[4], i2121[5], i2121[6], i2121[7])
  return i2120
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2122 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2123 = data
  i2122.m_Spacing = i2123[0]
  i2122.m_ChildForceExpandWidth = !!i2123[1]
  i2122.m_ChildForceExpandHeight = !!i2123[2]
  i2122.m_ChildControlWidth = !!i2123[3]
  i2122.m_ChildControlHeight = !!i2123[4]
  i2122.m_ChildScaleWidth = !!i2123[5]
  i2122.m_ChildScaleHeight = !!i2123[6]
  i2122.m_ReverseArrangement = !!i2123[7]
  i2122.m_Padding = UnityEngine.RectOffset.FromPaddings(i2123[8], i2123[9], i2123[10], i2123[11])
  i2122.m_ChildAlignment = i2123[12]
  return i2122
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i2124 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i2125 = data
  i2124.colorDefault = new pc.Color(i2125[0], i2125[1], i2125[2], i2125[3])
  i2124.colorSelected = new pc.Color(i2125[4], i2125[5], i2125[6], i2125[7])
  return i2124
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i2126 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i2127 = data
  request.r(i2127[0], i2127[1], 0, i2126, 'nameLabel')
  request.r(i2127[2], i2127[3], 0, i2126, 'header')
  i2126.colorDefault = new pc.Color(i2127[4], i2127[5], i2127[6], i2127[7])
  i2126.colorSelected = new pc.Color(i2127[8], i2127[9], i2127[10], i2127[11])
  return i2126
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i2128 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i2129 = data
  request.r(i2129[0], i2129[1], 0, i2128, 'nameLabel')
  request.r(i2129[2], i2129[3], 0, i2128, 'valueToggle')
  var i2131 = i2129[4]
  var i2130 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i2131.length; i += 2) {
  request.r(i2131[i + 0], i2131[i + 1], 1, i2130, '')
  }
  i2128.toggles = i2130
  i2128.colorDefault = new pc.Color(i2129[5], i2129[6], i2129[7], i2129[8])
  i2128.colorSelected = new pc.Color(i2129[9], i2129[10], i2129[11], i2129[12])
  return i2128
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i2134 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i2135 = data
  request.r(i2135[0], i2135[1], 0, i2134, 'nameLabel')
  request.r(i2135[2], i2135[3], 0, i2134, 'valueToggle')
  request.r(i2135[4], i2135[5], 0, i2134, 'checkmarkImage')
  i2134.colorDefault = new pc.Color(i2135[6], i2135[7], i2135[8], i2135[9])
  i2134.colorSelected = new pc.Color(i2135[10], i2135[11], i2135[12], i2135[13])
  return i2134
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i2136 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i2137 = data
  request.r(i2137[0], i2137[1], 0, i2136, 'nameLabel')
  request.r(i2137[2], i2137[3], 0, i2136, 'valueToggle')
  request.r(i2137[4], i2137[5], 0, i2136, 'checkmarkImage')
  i2136.colorDefault = new pc.Color(i2137[6], i2137[7], i2137[8], i2137[9])
  i2136.colorSelected = new pc.Color(i2137[10], i2137[11], i2137[12], i2137[13])
  return i2136
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i2138 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i2139 = data
  request.r(i2139[0], i2139[1], 0, i2138, 'nextButtonText')
  request.r(i2139[2], i2139[3], 0, i2138, 'previousButtonText')
  request.r(i2139[4], i2139[5], 0, i2138, 'nameLabel')
  request.r(i2139[6], i2139[7], 0, i2138, 'valueLabel')
  i2138.colorDefault = new pc.Color(i2139[8], i2139[9], i2139[10], i2139[11])
  i2138.colorSelected = new pc.Color(i2139[12], i2139[13], i2139[14], i2139[15])
  return i2138
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i2140 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i2141 = data
  request.r(i2141[0], i2141[1], 0, i2140, 'nameLabel')
  request.r(i2141[2], i2141[3], 0, i2140, 'valueToggle')
  i2140.colorDefault = new pc.Color(i2141[4], i2141[5], i2141[6], i2141[7])
  i2140.colorSelected = new pc.Color(i2141[8], i2141[9], i2141[10], i2141[11])
  return i2140
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i2142 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i2143 = data
  request.r(i2143[0], i2143[1], 0, i2142, 'nameLabel')
  i2142.colorDefault = new pc.Color(i2143[2], i2143[3], i2143[4], i2143[5])
  i2142.colorSelected = new pc.Color(i2143[6], i2143[7], i2143[8], i2143[9])
  return i2142
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i2144 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i2145 = data
  request.r(i2145[0], i2145[1], 0, i2144, 'nameLabel')
  request.r(i2145[2], i2145[3], 0, i2144, 'valueLabel')
  request.r(i2145[4], i2145[5], 0, i2144, 'progressBarRect')
  i2144.colorDefault = new pc.Color(i2145[6], i2145[7], i2145[8], i2145[9])
  i2144.colorSelected = new pc.Color(i2145[10], i2145[11], i2145[12], i2145[13])
  return i2144
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i2146 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i2147 = data
  request.r(i2147[0], i2147[1], 0, i2146, 'nameLabel')
  request.r(i2147[2], i2147[3], 0, i2146, 'valueLabel')
  i2146.colorDefault = new pc.Color(i2147[4], i2147[5], i2147[6], i2147[7])
  i2146.colorSelected = new pc.Color(i2147[8], i2147[9], i2147[10], i2147[11])
  return i2146
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i2148 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i2149 = data
  request.r(i2149[0], i2149[1], 0, i2148, 'nameLabel')
  request.r(i2149[2], i2149[3], 0, i2148, 'valueLabel')
  i2148.colorDefault = new pc.Color(i2149[4], i2149[5], i2149[6], i2149[7])
  i2148.colorSelected = new pc.Color(i2149[8], i2149[9], i2149[10], i2149[11])
  return i2148
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i2150 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i2151 = data
  request.r(i2151[0], i2151[1], 0, i2150, 'nextButtonText')
  request.r(i2151[2], i2151[3], 0, i2150, 'previousButtonText')
  request.r(i2151[4], i2151[5], 0, i2150, 'nameLabel')
  request.r(i2151[6], i2151[7], 0, i2150, 'valueLabel')
  i2150.colorDefault = new pc.Color(i2151[8], i2151[9], i2151[10], i2151[11])
  i2150.colorSelected = new pc.Color(i2151[12], i2151[13], i2151[14], i2151[15])
  return i2150
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i2152 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i2153 = data
  request.r(i2153[0], i2153[1], 0, i2152, 'nextButtonText')
  request.r(i2153[2], i2153[3], 0, i2152, 'previousButtonText')
  request.r(i2153[4], i2153[5], 0, i2152, 'nameLabel')
  request.r(i2153[6], i2153[7], 0, i2152, 'valueLabel')
  i2152.colorDefault = new pc.Color(i2153[8], i2153[9], i2153[10], i2153[11])
  i2152.colorSelected = new pc.Color(i2153[12], i2153[13], i2153[14], i2153[15])
  return i2152
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i2154 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i2155 = data
  request.r(i2155[0], i2155[1], 0, i2154, 'panel')
  request.r(i2155[2], i2155[3], 0, i2154, 'valuePrefab')
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i2156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i2157 = data
  i2156.AdditionalLightsPerObjectLimit = i2157[0]
  i2156.AdditionalLightsRenderingMode = i2157[1]
  i2156.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i2157[2], i2156.LightRenderingMode)
  i2156.ColorGradingLutSize = i2157[3]
  i2156.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i2157[4], i2156.ColorGradingMode)
  i2156.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i2157[5], i2156.MainLightRenderingMode)
  i2156.MainLightRenderingModeValue = i2157[6]
  i2156.SupportsMainLightShadows = !!i2157[7]
  i2156.MixedLightingSupported = !!i2157[8]
  i2156.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i2157[9], i2156.MsaaQuality)
  i2156.MSAA = i2157[10]
  i2156.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i2157[11], i2156.OpaqueDownsampling)
  i2156.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i2157[12], i2156.MainLightShadowmapResolution)
  i2156.MainLightShadowmapResolutionValue = i2157[13]
  i2156.SupportsSoftShadows = !!i2157[14]
  i2156.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i2157[15], i2156.SoftShadowQuality)
  i2156.SoftShadowQualityValue = i2157[16]
  i2156.ShadowDistance = i2157[17]
  i2156.ShadowCascadeCount = i2157[18]
  i2156.Cascade2Split = i2157[19]
  i2156.Cascade3Split = new pc.Vec2( i2157[20], i2157[21] )
  i2156.Cascade4Split = new pc.Vec3( i2157[22], i2157[23], i2157[24] )
  i2156.CascadeBorder = i2157[25]
  i2156.ShadowDepthBias = i2157[26]
  i2156.ShadowNormalBias = i2157[27]
  i2156.RenderScale = i2157[28]
  i2156.RequireDepthTexture = !!i2157[29]
  i2156.RequireOpaqueTexture = !!i2157[30]
  i2156.SupportsHDR = !!i2157[31]
  i2156.SupportsTerrainHoles = !!i2157[32]
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i2159 = data
  i2158.Disabled = i2159[0]
  i2158.PerVertex = i2159[1]
  i2158.PerPixel = i2159[2]
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i2160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i2161 = data
  i2160.LowDynamicRange = i2161[0]
  i2160.HighDynamicRange = i2161[1]
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i2163 = data
  i2162.Disabled = i2163[0]
  i2162._2x = i2163[1]
  i2162._4x = i2163[2]
  i2162._8x = i2163[3]
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i2165 = data
  i2164.None = i2165[0]
  i2164._2xBilinear = i2165[1]
  i2164._4xBox = i2165[2]
  i2164._4xBilinear = i2165[3]
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i2166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i2167 = data
  i2166._256 = i2167[0]
  i2166._512 = i2167[1]
  i2166._1024 = i2167[2]
  i2166._2048 = i2167[3]
  i2166._4096 = i2167[4]
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i2169 = data
  i2168.UsePipelineSettings = i2169[0]
  i2168.Low = i2169[1]
  i2168.Medium = i2169[2]
  i2168.High = i2169[3]
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2171 = data
  var i2173 = i2171[0]
  var i2172 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2173[i + 0]));
  }
  i2170.ShaderCompilationErrors = i2172
  i2170.name = i2171[1]
  i2170.guid = i2171[2]
  var i2175 = i2171[3]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.push( i2175[i + 0] );
  }
  i2170.shaderDefinedKeywords = i2174
  var i2177 = i2171[4]
  var i2176 = []
  for(var i = 0; i < i2177.length; i += 1) {
    i2176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2177[i + 0]) );
  }
  i2170.passes = i2176
  var i2179 = i2171[5]
  var i2178 = []
  for(var i = 0; i < i2179.length; i += 1) {
    i2178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2179[i + 0]) );
  }
  i2170.usePasses = i2178
  var i2181 = i2171[6]
  var i2180 = []
  for(var i = 0; i < i2181.length; i += 1) {
    i2180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2181[i + 0]) );
  }
  i2170.defaultParameterValues = i2180
  request.r(i2171[7], i2171[8], 0, i2170, 'unityFallbackShader')
  i2170.readDepth = !!i2171[9]
  i2170.isCreatedByShaderGraph = !!i2171[10]
  i2170.compiled = !!i2171[11]
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2185 = data
  i2184.shaderName = i2185[0]
  i2184.errorMessage = i2185[1]
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2190 = root || new pc.UnityShaderPass()
  var i2191 = data
  i2190.id = i2191[0]
  i2190.subShaderIndex = i2191[1]
  i2190.name = i2191[2]
  i2190.passType = i2191[3]
  i2190.grabPassTextureName = i2191[4]
  i2190.usePass = !!i2191[5]
  i2190.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2191[6], i2190.zTest)
  i2190.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2191[7], i2190.zWrite)
  i2190.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2191[8], i2190.culling)
  i2190.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2191[9], i2190.blending)
  i2190.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2191[10], i2190.alphaBlending)
  i2190.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2191[11], i2190.colorWriteMask)
  i2190.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2191[12], i2190.offsetUnits)
  i2190.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2191[13], i2190.offsetFactor)
  i2190.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2191[14], i2190.stencilRef)
  i2190.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2191[15], i2190.stencilReadMask)
  i2190.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2191[16], i2190.stencilWriteMask)
  i2190.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2191[17], i2190.stencilOp)
  i2190.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2191[18], i2190.stencilOpFront)
  i2190.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2191[19], i2190.stencilOpBack)
  var i2193 = i2191[20]
  var i2192 = []
  for(var i = 0; i < i2193.length; i += 1) {
    i2192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2193[i + 0]) );
  }
  i2190.tags = i2192
  var i2195 = i2191[21]
  var i2194 = []
  for(var i = 0; i < i2195.length; i += 1) {
    i2194.push( i2195[i + 0] );
  }
  i2190.passDefinedKeywords = i2194
  var i2197 = i2191[22]
  var i2196 = []
  for(var i = 0; i < i2197.length; i += 1) {
    i2196.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2197[i + 0]) );
  }
  i2190.passDefinedKeywordGroups = i2196
  var i2199 = i2191[23]
  var i2198 = []
  for(var i = 0; i < i2199.length; i += 1) {
    i2198.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2199[i + 0]) );
  }
  i2190.variants = i2198
  var i2201 = i2191[24]
  var i2200 = []
  for(var i = 0; i < i2201.length; i += 1) {
    i2200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2201[i + 0]) );
  }
  i2190.excludedVariants = i2200
  i2190.hasDepthReader = !!i2191[25]
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2203 = data
  i2202.val = i2203[0]
  i2202.name = i2203[1]
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2205 = data
  i2204.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2205[0], i2204.src)
  i2204.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2205[1], i2204.dst)
  i2204.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2205[2], i2204.op)
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2207 = data
  i2206.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2207[0], i2206.pass)
  i2206.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2207[1], i2206.fail)
  i2206.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2207[2], i2206.zFail)
  i2206.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2207[3], i2206.comp)
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2211 = data
  i2210.name = i2211[0]
  i2210.value = i2211[1]
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2215 = data
  var i2217 = i2215[0]
  var i2216 = []
  for(var i = 0; i < i2217.length; i += 1) {
    i2216.push( i2217[i + 0] );
  }
  i2214.keywords = i2216
  i2214.hasDiscard = !!i2215[1]
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2221 = data
  i2220.passId = i2221[0]
  i2220.subShaderIndex = i2221[1]
  var i2223 = i2221[2]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.push( i2223[i + 0] );
  }
  i2220.keywords = i2222
  i2220.vertexProgram = i2221[3]
  i2220.fragmentProgram = i2221[4]
  i2220.exportedForWebGl2 = !!i2221[5]
  i2220.readDepth = !!i2221[6]
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2227 = data
  request.r(i2227[0], i2227[1], 0, i2226, 'shader')
  i2226.pass = i2227[2]
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2231 = data
  i2230.name = i2231[0]
  i2230.type = i2231[1]
  i2230.value = new pc.Vec4( i2231[2], i2231[3], i2231[4], i2231[5] )
  i2230.textureValue = i2231[6]
  i2230.shaderPropertyFlag = i2231[7]
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2233 = data
  i2232.name = i2233[0]
  request.r(i2233[1], i2233[2], 0, i2232, 'texture')
  i2232.aabb = i2233[3]
  i2232.vertices = i2233[4]
  i2232.triangles = i2233[5]
  i2232.textureRect = UnityEngine.Rect.MinMaxRect(i2233[6], i2233[7], i2233[8], i2233[9])
  i2232.packedRect = UnityEngine.Rect.MinMaxRect(i2233[10], i2233[11], i2233[12], i2233[13])
  i2232.border = new pc.Vec4( i2233[14], i2233[15], i2233[16], i2233[17] )
  i2232.transparency = i2233[18]
  i2232.bounds = i2233[19]
  i2232.pixelsPerUnit = i2233[20]
  i2232.textureWidth = i2233[21]
  i2232.textureHeight = i2233[22]
  i2232.nativeSize = new pc.Vec2( i2233[23], i2233[24] )
  i2232.pivot = new pc.Vec2( i2233[25], i2233[26] )
  i2232.textureRectOffset = new pc.Vec2( i2233[27], i2233[28] )
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2235 = data
  i2234.name = i2235[0]
  i2234.ascent = i2235[1]
  i2234.originalLineHeight = i2235[2]
  i2234.fontSize = i2235[3]
  var i2237 = i2235[4]
  var i2236 = []
  for(var i = 0; i < i2237.length; i += 1) {
    i2236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2237[i + 0]) );
  }
  i2234.characterInfo = i2236
  request.r(i2235[5], i2235[6], 0, i2234, 'texture')
  i2234.originalFontSize = i2235[7]
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2241 = data
  i2240.index = i2241[0]
  i2240.advance = i2241[1]
  i2240.bearing = i2241[2]
  i2240.glyphWidth = i2241[3]
  i2240.glyphHeight = i2241[4]
  i2240.minX = i2241[5]
  i2240.maxX = i2241[6]
  i2240.minY = i2241[7]
  i2240.maxY = i2241[8]
  i2240.uvBottomLeftX = i2241[9]
  i2240.uvBottomLeftY = i2241[10]
  i2240.uvBottomRightX = i2241[11]
  i2240.uvBottomRightY = i2241[12]
  i2240.uvTopLeftX = i2241[13]
  i2240.uvTopLeftY = i2241[14]
  i2240.uvTopRightX = i2241[15]
  i2240.uvTopRightY = i2241[16]
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2243 = data
  i2242.name = i2243[0]
  i2242.bytes64 = i2243[1]
  i2242.data = i2243[2]
  return i2242
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2244 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2245 = data
  i2244.hashCode = i2245[0]
  request.r(i2245[1], i2245[2], 0, i2244, 'material')
  i2244.materialHashCode = i2245[3]
  request.r(i2245[4], i2245[5], 0, i2244, 'atlas')
  i2244.normalStyle = i2245[6]
  i2244.normalSpacingOffset = i2245[7]
  i2244.boldStyle = i2245[8]
  i2244.boldSpacing = i2245[9]
  i2244.italicStyle = i2245[10]
  i2244.tabSize = i2245[11]
  i2244.m_Version = i2245[12]
  i2244.m_SourceFontFileGUID = i2245[13]
  request.r(i2245[14], i2245[15], 0, i2244, 'm_SourceFontFile_EditorRef')
  request.r(i2245[16], i2245[17], 0, i2244, 'm_SourceFontFile')
  i2244.m_AtlasPopulationMode = i2245[18]
  i2244.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2245[19], i2244.m_FaceInfo)
  var i2247 = i2245[20]
  var i2246 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2247.length; i += 1) {
    i2246.add(request.d('UnityEngine.TextCore.Glyph', i2247[i + 0]));
  }
  i2244.m_GlyphTable = i2246
  var i2249 = i2245[21]
  var i2248 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2249.length; i += 1) {
    i2248.add(request.d('TMPro.TMP_Character', i2249[i + 0]));
  }
  i2244.m_CharacterTable = i2248
  var i2251 = i2245[22]
  var i2250 = []
  for(var i = 0; i < i2251.length; i += 2) {
  request.r(i2251[i + 0], i2251[i + 1], 2, i2250, '')
  }
  i2244.m_AtlasTextures = i2250
  i2244.m_AtlasTextureIndex = i2245[23]
  i2244.m_IsMultiAtlasTexturesEnabled = !!i2245[24]
  i2244.m_ClearDynamicDataOnBuild = !!i2245[25]
  var i2253 = i2245[26]
  var i2252 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2253.length; i += 1) {
    i2252.add(request.d('UnityEngine.TextCore.GlyphRect', i2253[i + 0]));
  }
  i2244.m_UsedGlyphRects = i2252
  var i2255 = i2245[27]
  var i2254 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2255.length; i += 1) {
    i2254.add(request.d('UnityEngine.TextCore.GlyphRect', i2255[i + 0]));
  }
  i2244.m_FreeGlyphRects = i2254
  i2244.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2245[28], i2244.m_fontInfo)
  i2244.m_AtlasWidth = i2245[29]
  i2244.m_AtlasHeight = i2245[30]
  i2244.m_AtlasPadding = i2245[31]
  i2244.m_AtlasRenderMode = i2245[32]
  var i2257 = i2245[33]
  var i2256 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2257.length; i += 1) {
    i2256.add(request.d('TMPro.TMP_Glyph', i2257[i + 0]));
  }
  i2244.m_glyphInfoList = i2256
  i2244.m_KerningTable = request.d('TMPro.KerningTable', i2245[34], i2244.m_KerningTable)
  i2244.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2245[35], i2244.m_FontFeatureTable)
  var i2259 = i2245[36]
  var i2258 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2259.length; i += 2) {
  request.r(i2259[i + 0], i2259[i + 1], 1, i2258, '')
  }
  i2244.fallbackFontAssets = i2258
  var i2261 = i2245[37]
  var i2260 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2261.length; i += 2) {
  request.r(i2261[i + 0], i2261[i + 1], 1, i2260, '')
  }
  i2244.m_FallbackFontAssetTable = i2260
  i2244.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2245[38], i2244.m_CreationSettings)
  var i2263 = i2245[39]
  var i2262 = []
  for(var i = 0; i < i2263.length; i += 1) {
    i2262.push( request.d('TMPro.TMP_FontWeightPair', i2263[i + 0]) );
  }
  i2244.m_FontWeightTable = i2262
  var i2265 = i2245[40]
  var i2264 = []
  for(var i = 0; i < i2265.length; i += 1) {
    i2264.push( request.d('TMPro.TMP_FontWeightPair', i2265[i + 0]) );
  }
  i2244.fontWeights = i2264
  return i2244
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2266 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2267 = data
  i2266.m_FaceIndex = i2267[0]
  i2266.m_FamilyName = i2267[1]
  i2266.m_StyleName = i2267[2]
  i2266.m_PointSize = i2267[3]
  i2266.m_Scale = i2267[4]
  i2266.m_UnitsPerEM = i2267[5]
  i2266.m_LineHeight = i2267[6]
  i2266.m_AscentLine = i2267[7]
  i2266.m_CapLine = i2267[8]
  i2266.m_MeanLine = i2267[9]
  i2266.m_Baseline = i2267[10]
  i2266.m_DescentLine = i2267[11]
  i2266.m_SuperscriptOffset = i2267[12]
  i2266.m_SuperscriptSize = i2267[13]
  i2266.m_SubscriptOffset = i2267[14]
  i2266.m_SubscriptSize = i2267[15]
  i2266.m_UnderlineOffset = i2267[16]
  i2266.m_UnderlineThickness = i2267[17]
  i2266.m_StrikethroughOffset = i2267[18]
  i2266.m_StrikethroughThickness = i2267[19]
  i2266.m_TabWidth = i2267[20]
  return i2266
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2270 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2271 = data
  i2270.m_Index = i2271[0]
  i2270.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2271[1], i2270.m_Metrics)
  i2270.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2271[2], i2270.m_GlyphRect)
  i2270.m_Scale = i2271[3]
  i2270.m_AtlasIndex = i2271[4]
  i2270.m_ClassDefinitionType = i2271[5]
  return i2270
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2272 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2273 = data
  i2272.m_Width = i2273[0]
  i2272.m_Height = i2273[1]
  i2272.m_HorizontalBearingX = i2273[2]
  i2272.m_HorizontalBearingY = i2273[3]
  i2272.m_HorizontalAdvance = i2273[4]
  return i2272
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2274 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2275 = data
  i2274.m_X = i2275[0]
  i2274.m_Y = i2275[1]
  i2274.m_Width = i2275[2]
  i2274.m_Height = i2275[3]
  return i2274
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2278 = root || request.c( 'TMPro.TMP_Character' )
  var i2279 = data
  i2278.m_ElementType = i2279[0]
  i2278.m_Unicode = i2279[1]
  i2278.m_GlyphIndex = i2279[2]
  i2278.m_Scale = i2279[3]
  return i2278
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2284 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2285 = data
  i2284.Name = i2285[0]
  i2284.PointSize = i2285[1]
  i2284.Scale = i2285[2]
  i2284.CharacterCount = i2285[3]
  i2284.LineHeight = i2285[4]
  i2284.Baseline = i2285[5]
  i2284.Ascender = i2285[6]
  i2284.CapHeight = i2285[7]
  i2284.Descender = i2285[8]
  i2284.CenterLine = i2285[9]
  i2284.SuperscriptOffset = i2285[10]
  i2284.SubscriptOffset = i2285[11]
  i2284.SubSize = i2285[12]
  i2284.Underline = i2285[13]
  i2284.UnderlineThickness = i2285[14]
  i2284.strikethrough = i2285[15]
  i2284.strikethroughThickness = i2285[16]
  i2284.TabWidth = i2285[17]
  i2284.Padding = i2285[18]
  i2284.AtlasWidth = i2285[19]
  i2284.AtlasHeight = i2285[20]
  return i2284
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2288 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2289 = data
  i2288.id = i2289[0]
  i2288.x = i2289[1]
  i2288.y = i2289[2]
  i2288.width = i2289[3]
  i2288.height = i2289[4]
  i2288.xOffset = i2289[5]
  i2288.yOffset = i2289[6]
  i2288.xAdvance = i2289[7]
  i2288.scale = i2289[8]
  return i2288
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2290 = root || request.c( 'TMPro.KerningTable' )
  var i2291 = data
  var i2293 = i2291[0]
  var i2292 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2293.length; i += 1) {
    i2292.add(request.d('TMPro.KerningPair', i2293[i + 0]));
  }
  i2290.kerningPairs = i2292
  return i2290
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2296 = root || request.c( 'TMPro.KerningPair' )
  var i2297 = data
  i2296.xOffset = i2297[0]
  i2296.m_FirstGlyph = i2297[1]
  i2296.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2297[2], i2296.m_FirstGlyphAdjustments)
  i2296.m_SecondGlyph = i2297[3]
  i2296.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2297[4], i2296.m_SecondGlyphAdjustments)
  i2296.m_IgnoreSpacingAdjustments = !!i2297[5]
  return i2296
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2298 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2299 = data
  var i2301 = i2299[0]
  var i2300 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2301.length; i += 1) {
    i2300.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2301[i + 0]));
  }
  i2298.m_GlyphPairAdjustmentRecords = i2300
  return i2298
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2304 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2305 = data
  i2304.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2305[0], i2304.m_FirstAdjustmentRecord)
  i2304.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2305[1], i2304.m_SecondAdjustmentRecord)
  i2304.m_FeatureLookupFlags = i2305[2]
  return i2304
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2306 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2307 = data
  i2306.m_GlyphIndex = i2307[0]
  i2306.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2307[1], i2306.m_GlyphValueRecord)
  return i2306
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2308 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2309 = data
  i2308.m_XPlacement = i2309[0]
  i2308.m_YPlacement = i2309[1]
  i2308.m_XAdvance = i2309[2]
  i2308.m_YAdvance = i2309[3]
  return i2308
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2312 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2313 = data
  i2312.sourceFontFileName = i2313[0]
  i2312.sourceFontFileGUID = i2313[1]
  i2312.pointSizeSamplingMode = i2313[2]
  i2312.pointSize = i2313[3]
  i2312.padding = i2313[4]
  i2312.packingMode = i2313[5]
  i2312.atlasWidth = i2313[6]
  i2312.atlasHeight = i2313[7]
  i2312.characterSetSelectionMode = i2313[8]
  i2312.characterSequence = i2313[9]
  i2312.referencedFontAssetGUID = i2313[10]
  i2312.referencedTextAssetGUID = i2313[11]
  i2312.fontStyle = i2313[12]
  i2312.fontStyleModifier = i2313[13]
  i2312.renderMode = i2313[14]
  i2312.includeFontFeatures = !!i2313[15]
  return i2312
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2316 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2317 = data
  request.r(i2317[0], i2317[1], 0, i2316, 'regularTypeface')
  request.r(i2317[2], i2317[3], 0, i2316, 'italicTypeface')
  return i2316
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i2318 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i2319 = data
  var i2321 = i2319[0]
  var i2320 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i2321.length; i += 2) {
  request.r(i2321[i + 0], i2321[i + 1], 1, i2320, '')
  }
  i2318.components = i2320
  return i2318
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i2324 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i2325 = data
  i2324.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i2325[0], i2324.mode)
  i2324.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i2325[1], i2324.neutralHDRRangeReductionMode)
  i2324.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i2325[2], i2324.acesPreset)
  i2324.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2325[3], i2324.hueShiftAmount)
  i2324.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i2325[4], i2324.detectPaperWhite)
  i2324.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2325[5], i2324.paperWhite)
  i2324.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i2325[6], i2324.detectBrightnessLimits)
  i2324.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2325[7], i2324.minNits)
  i2324.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2325[8], i2324.maxNits)
  i2324.active = !!i2325[9]
  return i2324
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i2326 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i2327 = data
  i2326.m_Value = i2327[0]
  i2326.m_OverrideState = !!i2327[1]
  return i2326
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i2328 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i2329 = data
  i2328.m_Value = i2329[0]
  i2328.m_OverrideState = !!i2329[1]
  return i2328
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i2330 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i2331 = data
  i2330.m_Value = i2331[0]
  i2330.m_OverrideState = !!i2331[1]
  return i2330
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i2332 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i2333 = data
  i2332.m_Value = i2333[0]
  i2332.m_OverrideState = !!i2333[1]
  return i2332
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i2334 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i2335 = data
  i2334.m_Value = !!i2335[0]
  i2334.m_OverrideState = !!i2335[1]
  return i2334
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i2336 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i2337 = data
  i2336.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i2337[0], i2336.skipIterations)
  i2336.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i2337[1], i2336.threshold)
  i2336.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i2337[2], i2336.intensity)
  i2336.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2337[3], i2336.scatter)
  i2336.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i2337[4], i2336.clamp)
  i2336.tint = request.d('UnityEngine.Rendering.ColorParameter', i2337[5], i2336.tint)
  i2336.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i2337[6], i2336.highQualityFiltering)
  i2336.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i2337[7], i2336.downscale)
  i2336.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i2337[8], i2336.maxIterations)
  i2336.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i2337[9], i2336.dirtTexture)
  i2336.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i2337[10], i2336.dirtIntensity)
  i2336.active = !!i2337[11]
  return i2336
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i2338 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i2339 = data
  i2338.m_Value = i2339[0]
  i2338.m_OverrideState = !!i2339[1]
  return i2338
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i2340 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i2341 = data
  i2340.m_Value = i2341[0]
  i2340.m_OverrideState = !!i2341[1]
  return i2340
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i2342 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i2343 = data
  i2342.m_Value = new pc.Color(i2343[0], i2343[1], i2343[2], i2343[3])
  i2342.m_OverrideState = !!i2343[4]
  return i2342
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i2344 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i2345 = data
  i2344.m_Value = i2345[0]
  i2344.m_OverrideState = !!i2345[1]
  return i2344
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i2346 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i2347 = data
  i2346.dimension = i2347[0]
  request.r(i2347[1], i2347[2], 0, i2346, 'm_Value')
  i2346.m_OverrideState = !!i2347[3]
  return i2346
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i2348 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i2349 = data
  i2348.color = request.d('UnityEngine.Rendering.ColorParameter', i2349[0], i2348.color)
  i2348.center = request.d('UnityEngine.Rendering.Vector2Parameter', i2349[1], i2348.center)
  i2348.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2349[2], i2348.intensity)
  i2348.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2349[3], i2348.smoothness)
  i2348.rounded = request.d('UnityEngine.Rendering.BoolParameter', i2349[4], i2348.rounded)
  i2348.active = !!i2349[5]
  return i2348
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i2350 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i2351 = data
  i2350.m_Value = new pc.Vec2( i2351[0], i2351[1] )
  i2350.m_OverrideState = !!i2351[2]
  return i2350
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2352 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2353 = data
  i2352.useSafeMode = !!i2353[0]
  i2352.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2353[1], i2352.safeModeOptions)
  i2352.timeScale = i2353[2]
  i2352.unscaledTimeScale = i2353[3]
  i2352.useSmoothDeltaTime = !!i2353[4]
  i2352.maxSmoothUnscaledTime = i2353[5]
  i2352.rewindCallbackMode = i2353[6]
  i2352.showUnityEditorReport = !!i2353[7]
  i2352.logBehaviour = i2353[8]
  i2352.drawGizmos = !!i2353[9]
  i2352.defaultRecyclable = !!i2353[10]
  i2352.defaultAutoPlay = i2353[11]
  i2352.defaultUpdateType = i2353[12]
  i2352.defaultTimeScaleIndependent = !!i2353[13]
  i2352.defaultEaseType = i2353[14]
  i2352.defaultEaseOvershootOrAmplitude = i2353[15]
  i2352.defaultEasePeriod = i2353[16]
  i2352.defaultAutoKill = !!i2353[17]
  i2352.defaultLoopType = i2353[18]
  i2352.debugMode = !!i2353[19]
  i2352.debugStoreTargetId = !!i2353[20]
  i2352.showPreviewPanel = !!i2353[21]
  i2352.storeSettingsLocation = i2353[22]
  i2352.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2353[23], i2352.modules)
  i2352.createASMDEF = !!i2353[24]
  i2352.showPlayingTweens = !!i2353[25]
  i2352.showPausedTweens = !!i2353[26]
  return i2352
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2354 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2355 = data
  i2354.logBehaviour = i2355[0]
  i2354.nestedTweenFailureBehaviour = i2355[1]
  return i2354
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2356 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2357 = data
  i2356.showPanel = !!i2357[0]
  i2356.audioEnabled = !!i2357[1]
  i2356.physicsEnabled = !!i2357[2]
  i2356.physics2DEnabled = !!i2357[3]
  i2356.spriteEnabled = !!i2357[4]
  i2356.uiEnabled = !!i2357[5]
  i2356.textMeshProEnabled = !!i2357[6]
  i2356.tk2DEnabled = !!i2357[7]
  i2356.deAudioEnabled = !!i2357[8]
  i2356.deUnityExtendedEnabled = !!i2357[9]
  i2356.epoOutlineEnabled = !!i2357[10]
  return i2356
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2358 = root || request.c( 'TMPro.TMP_Settings' )
  var i2359 = data
  i2358.m_enableWordWrapping = !!i2359[0]
  i2358.m_enableKerning = !!i2359[1]
  i2358.m_enableExtraPadding = !!i2359[2]
  i2358.m_enableTintAllSprites = !!i2359[3]
  i2358.m_enableParseEscapeCharacters = !!i2359[4]
  i2358.m_EnableRaycastTarget = !!i2359[5]
  i2358.m_GetFontFeaturesAtRuntime = !!i2359[6]
  i2358.m_missingGlyphCharacter = i2359[7]
  i2358.m_warningsDisabled = !!i2359[8]
  request.r(i2359[9], i2359[10], 0, i2358, 'm_defaultFontAsset')
  i2358.m_defaultFontAssetPath = i2359[11]
  i2358.m_defaultFontSize = i2359[12]
  i2358.m_defaultAutoSizeMinRatio = i2359[13]
  i2358.m_defaultAutoSizeMaxRatio = i2359[14]
  i2358.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2359[15], i2359[16] )
  i2358.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2359[17], i2359[18] )
  i2358.m_autoSizeTextContainer = !!i2359[19]
  i2358.m_IsTextObjectScaleStatic = !!i2359[20]
  var i2361 = i2359[21]
  var i2360 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2361.length; i += 2) {
  request.r(i2361[i + 0], i2361[i + 1], 1, i2360, '')
  }
  i2358.m_fallbackFontAssets = i2360
  i2358.m_matchMaterialPreset = !!i2359[22]
  request.r(i2359[23], i2359[24], 0, i2358, 'm_defaultSpriteAsset')
  i2358.m_defaultSpriteAssetPath = i2359[25]
  i2358.m_enableEmojiSupport = !!i2359[26]
  i2358.m_MissingCharacterSpriteUnicode = i2359[27]
  i2358.m_defaultColorGradientPresetsPath = i2359[28]
  request.r(i2359[29], i2359[30], 0, i2358, 'm_defaultStyleSheet')
  i2358.m_StyleSheetsResourcePath = i2359[31]
  request.r(i2359[32], i2359[33], 0, i2358, 'm_leadingCharacters')
  request.r(i2359[34], i2359[35], 0, i2358, 'm_followingCharacters')
  i2358.m_UseModernHangulLineBreakingRules = !!i2359[36]
  return i2358
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2362 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2363 = data
  i2362.hashCode = i2363[0]
  request.r(i2363[1], i2363[2], 0, i2362, 'material')
  i2362.materialHashCode = i2363[3]
  request.r(i2363[4], i2363[5], 0, i2362, 'spriteSheet')
  var i2365 = i2363[6]
  var i2364 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2365.length; i += 1) {
    i2364.add(request.d('TMPro.TMP_Sprite', i2365[i + 0]));
  }
  i2362.spriteInfoList = i2364
  var i2367 = i2363[7]
  var i2366 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2367.length; i += 2) {
  request.r(i2367[i + 0], i2367[i + 1], 1, i2366, '')
  }
  i2362.fallbackSpriteAssets = i2366
  i2362.m_Version = i2363[8]
  i2362.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2363[9], i2362.m_FaceInfo)
  var i2369 = i2363[10]
  var i2368 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2369.length; i += 1) {
    i2368.add(request.d('TMPro.TMP_SpriteCharacter', i2369[i + 0]));
  }
  i2362.m_SpriteCharacterTable = i2368
  var i2371 = i2363[11]
  var i2370 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2371.length; i += 1) {
    i2370.add(request.d('TMPro.TMP_SpriteGlyph', i2371[i + 0]));
  }
  i2362.m_SpriteGlyphTable = i2370
  return i2362
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2374 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2375 = data
  i2374.name = i2375[0]
  i2374.hashCode = i2375[1]
  i2374.unicode = i2375[2]
  i2374.pivot = new pc.Vec2( i2375[3], i2375[4] )
  request.r(i2375[5], i2375[6], 0, i2374, 'sprite')
  i2374.id = i2375[7]
  i2374.x = i2375[8]
  i2374.y = i2375[9]
  i2374.width = i2375[10]
  i2374.height = i2375[11]
  i2374.xOffset = i2375[12]
  i2374.yOffset = i2375[13]
  i2374.xAdvance = i2375[14]
  i2374.scale = i2375[15]
  return i2374
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2380 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2381 = data
  i2380.m_Name = i2381[0]
  i2380.m_HashCode = i2381[1]
  i2380.m_ElementType = i2381[2]
  i2380.m_Unicode = i2381[3]
  i2380.m_GlyphIndex = i2381[4]
  i2380.m_Scale = i2381[5]
  return i2380
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2384 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2385 = data
  request.r(i2385[0], i2385[1], 0, i2384, 'sprite')
  i2384.m_Index = i2385[2]
  i2384.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2385[3], i2384.m_Metrics)
  i2384.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2385[4], i2384.m_GlyphRect)
  i2384.m_Scale = i2385[5]
  i2384.m_AtlasIndex = i2385[6]
  i2384.m_ClassDefinitionType = i2385[7]
  return i2384
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2386 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2387 = data
  var i2389 = i2387[0]
  var i2388 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2389.length; i += 1) {
    i2388.add(request.d('TMPro.TMP_Style', i2389[i + 0]));
  }
  i2386.m_StyleList = i2388
  return i2386
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2392 = root || request.c( 'TMPro.TMP_Style' )
  var i2393 = data
  i2392.m_Name = i2393[0]
  i2392.m_HashCode = i2393[1]
  i2392.m_OpeningDefinition = i2393[2]
  i2392.m_ClosingDefinition = i2393[3]
  i2392.m_OpeningTagArray = i2393[4]
  i2392.m_ClosingTagArray = i2393[5]
  i2392.m_OpeningTagUnicodeArray = i2393[6]
  i2392.m_ClosingTagUnicodeArray = i2393[7]
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2395 = data
  var i2397 = i2395[0]
  var i2396 = []
  for(var i = 0; i < i2397.length; i += 1) {
    i2396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2397[i + 0]) );
  }
  i2394.files = i2396
  i2394.componentToPrefabIds = i2395[1]
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2401 = data
  i2400.path = i2401[0]
  request.r(i2401[1], i2401[2], 0, i2400, 'unityObject')
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2403 = data
  var i2405 = i2403[0]
  var i2404 = []
  for(var i = 0; i < i2405.length; i += 1) {
    i2404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2405[i + 0]) );
  }
  i2402.scriptsExecutionOrder = i2404
  var i2407 = i2403[1]
  var i2406 = []
  for(var i = 0; i < i2407.length; i += 1) {
    i2406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2407[i + 0]) );
  }
  i2402.sortingLayers = i2406
  var i2409 = i2403[2]
  var i2408 = []
  for(var i = 0; i < i2409.length; i += 1) {
    i2408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2409[i + 0]) );
  }
  i2402.cullingLayers = i2408
  i2402.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2403[3], i2402.timeSettings)
  i2402.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2403[4], i2402.physicsSettings)
  i2402.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2403[5], i2402.physics2DSettings)
  i2402.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2403[6], i2402.qualitySettings)
  i2402.enableRealtimeShadows = !!i2403[7]
  i2402.enableAutoInstancing = !!i2403[8]
  i2402.enableDynamicBatching = !!i2403[9]
  i2402.lightmapEncodingQuality = i2403[10]
  i2402.desiredColorSpace = i2403[11]
  var i2411 = i2403[12]
  var i2410 = []
  for(var i = 0; i < i2411.length; i += 1) {
    i2410.push( i2411[i + 0] );
  }
  i2402.allTags = i2410
  return i2402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2415 = data
  i2414.name = i2415[0]
  i2414.value = i2415[1]
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2419 = data
  i2418.id = i2419[0]
  i2418.name = i2419[1]
  i2418.value = i2419[2]
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2423 = data
  i2422.id = i2423[0]
  i2422.name = i2423[1]
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2425 = data
  i2424.fixedDeltaTime = i2425[0]
  i2424.maximumDeltaTime = i2425[1]
  i2424.timeScale = i2425[2]
  i2424.maximumParticleTimestep = i2425[3]
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2427 = data
  i2426.gravity = new pc.Vec3( i2427[0], i2427[1], i2427[2] )
  i2426.defaultSolverIterations = i2427[3]
  i2426.bounceThreshold = i2427[4]
  i2426.autoSyncTransforms = !!i2427[5]
  i2426.autoSimulation = !!i2427[6]
  var i2429 = i2427[7]
  var i2428 = []
  for(var i = 0; i < i2429.length; i += 1) {
    i2428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2429[i + 0]) );
  }
  i2426.collisionMatrix = i2428
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2433 = data
  i2432.enabled = !!i2433[0]
  i2432.layerId = i2433[1]
  i2432.otherLayerId = i2433[2]
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2435 = data
  request.r(i2435[0], i2435[1], 0, i2434, 'material')
  i2434.gravity = new pc.Vec2( i2435[2], i2435[3] )
  i2434.positionIterations = i2435[4]
  i2434.velocityIterations = i2435[5]
  i2434.velocityThreshold = i2435[6]
  i2434.maxLinearCorrection = i2435[7]
  i2434.maxAngularCorrection = i2435[8]
  i2434.maxTranslationSpeed = i2435[9]
  i2434.maxRotationSpeed = i2435[10]
  i2434.baumgarteScale = i2435[11]
  i2434.baumgarteTOIScale = i2435[12]
  i2434.timeToSleep = i2435[13]
  i2434.linearSleepTolerance = i2435[14]
  i2434.angularSleepTolerance = i2435[15]
  i2434.defaultContactOffset = i2435[16]
  i2434.autoSimulation = !!i2435[17]
  i2434.queriesHitTriggers = !!i2435[18]
  i2434.queriesStartInColliders = !!i2435[19]
  i2434.callbacksOnDisable = !!i2435[20]
  i2434.reuseCollisionCallbacks = !!i2435[21]
  i2434.autoSyncTransforms = !!i2435[22]
  var i2437 = i2435[23]
  var i2436 = []
  for(var i = 0; i < i2437.length; i += 1) {
    i2436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2437[i + 0]) );
  }
  i2434.collisionMatrix = i2436
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2441 = data
  i2440.enabled = !!i2441[0]
  i2440.layerId = i2441[1]
  i2440.otherLayerId = i2441[2]
  return i2440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2443 = data
  var i2445 = i2443[0]
  var i2444 = []
  for(var i = 0; i < i2445.length; i += 1) {
    i2444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2445[i + 0]) );
  }
  i2442.qualityLevels = i2444
  var i2447 = i2443[1]
  var i2446 = []
  for(var i = 0; i < i2447.length; i += 1) {
    i2446.push( i2447[i + 0] );
  }
  i2442.names = i2446
  i2442.shadows = i2443[2]
  i2442.anisotropicFiltering = i2443[3]
  i2442.antiAliasing = i2443[4]
  i2442.lodBias = i2443[5]
  i2442.shadowCascades = i2443[6]
  i2442.shadowDistance = i2443[7]
  i2442.shadowmaskMode = i2443[8]
  i2442.shadowProjection = i2443[9]
  i2442.shadowResolution = i2443[10]
  i2442.softParticles = !!i2443[11]
  i2442.softVegetation = !!i2443[12]
  i2442.activeColorSpace = i2443[13]
  i2442.desiredColorSpace = i2443[14]
  i2442.masterTextureLimit = i2443[15]
  i2442.maxQueuedFrames = i2443[16]
  i2442.particleRaycastBudget = i2443[17]
  i2442.pixelLightCount = i2443[18]
  i2442.realtimeReflectionProbes = !!i2443[19]
  i2442.shadowCascade2Split = i2443[20]
  i2442.shadowCascade4Split = new pc.Vec3( i2443[21], i2443[22], i2443[23] )
  i2442.streamingMipmapsActive = !!i2443[24]
  i2442.vSyncCount = i2443[25]
  i2442.asyncUploadBufferSize = i2443[26]
  i2442.asyncUploadTimeSlice = i2443[27]
  i2442.billboardsFaceCameraPosition = !!i2443[28]
  i2442.shadowNearPlaneOffset = i2443[29]
  i2442.streamingMipmapsMemoryBudget = i2443[30]
  i2442.maximumLODLevel = i2443[31]
  i2442.streamingMipmapsAddAllCameras = !!i2443[32]
  i2442.streamingMipmapsMaxLevelReduction = i2443[33]
  i2442.streamingMipmapsRenderersPerFrame = i2443[34]
  i2442.resolutionScalingFixedDPIFactor = i2443[35]
  i2442.streamingMipmapsMaxFileIORequests = i2443[36]
  i2442.currentQualityLevel = i2443[37]
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2453 = data
  i2452.weight = i2453[0]
  i2452.vertices = i2453[1]
  i2452.normals = i2453[2]
  i2452.tangents = i2453[3]
  return i2452
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2454 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2455 = data
  i2454.xPlacement = i2455[0]
  i2454.yPlacement = i2455[1]
  i2454.xAdvance = i2455[2]
  i2454.yAdvance = i2455[3]
  return i2454
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"89":[90],"91":[90],"92":[90],"93":[90],"94":[90],"95":[90],"96":[97],"98":[19],"99":[100],"101":[100],"102":[100],"103":[100],"104":[100],"105":[100],"106":[100],"107":[108],"109":[108],"110":[108],"111":[108],"112":[108],"113":[108],"114":[108],"115":[108],"116":[108],"117":[108],"118":[108],"119":[108],"120":[108],"121":[19],"122":[3],"123":[124],"125":[124],"18":[10],"126":[11,127,10],"59":[10],"128":[19],"21":[19],"34":[33],"129":[130],"131":[10],"132":[10],"23":[18],"13":[11,10],"133":[10],"22":[18],"40":[10],"134":[10],"66":[10],"135":[10],"45":[10],"136":[10],"39":[10],"48":[10],"137":[10],"138":[11,10],"139":[10],"47":[10],"44":[10],"30":[10],"43":[11,10],"52":[10],"140":[35],"141":[35],"36":[35],"142":[35],"143":[19],"144":[19],"145":[130],"146":[10],"147":[3,10],"26":[10,11],"148":[10],"149":[11,10],"150":[3],"151":[11,10],"152":[10],"153":[130]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","Case","UnityEngine.Shader","UnityEngine.BoxCollider","Bottle","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Texture2D","PuzzleManager","UnityEngine.GameObject","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Button","ButtonPulse","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","TextHint","TimerSlider","UnityEngine.UI.Slider","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.Text","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.Font","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.Vignette","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Extensions.CasualGame.UIParticleSystem","UnityEngine.ParticleSystem","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.60f1";

Deserializers.productName = "Playable_Project";

Deserializers.lunaInitializationTime = "07/07/2025 19:41:10";

Deserializers.lunaDaysRunning = "0.9";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "Subject-Test-Build";

Deserializers.lunaAppID = "31170";

Deserializers.projectId = "1ea3bb43f778449c78ecaf64beaf075a";

Deserializers.packagesInfo = "com.unity.nuget.newtonsoft-json: 2.0.0\ncom.unity.render-pipelines.universal: 14.0.12\ncom.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1775";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4122";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.Unity-Technologies.com.unity.template.urp-blank";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "4c4eece3-5ba4-4b2b-9480-d7cf7d94fbba";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

