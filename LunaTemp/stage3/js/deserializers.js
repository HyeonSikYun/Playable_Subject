var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3080 = root || request.c( 'UnityEngine.JointSpring' )
  var i3081 = data
  i3080.spring = i3081[0]
  i3080.damper = i3081[1]
  i3080.targetPosition = i3081[2]
  return i3080
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3082 = root || request.c( 'UnityEngine.JointMotor' )
  var i3083 = data
  i3082.m_TargetVelocity = i3083[0]
  i3082.m_Force = i3083[1]
  i3082.m_FreeSpin = i3083[2]
  return i3082
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3084 = root || request.c( 'UnityEngine.JointLimits' )
  var i3085 = data
  i3084.m_Min = i3085[0]
  i3084.m_Max = i3085[1]
  i3084.m_Bounciness = i3085[2]
  i3084.m_BounceMinVelocity = i3085[3]
  i3084.m_ContactDistance = i3085[4]
  i3084.minBounce = i3085[5]
  i3084.maxBounce = i3085[6]
  return i3084
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3086 = root || request.c( 'UnityEngine.JointDrive' )
  var i3087 = data
  i3086.m_PositionSpring = i3087[0]
  i3086.m_PositionDamper = i3087[1]
  i3086.m_MaximumForce = i3087[2]
  i3086.m_UseAcceleration = i3087[3]
  return i3086
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3088 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3089 = data
  i3088.m_Spring = i3089[0]
  i3088.m_Damper = i3089[1]
  return i3088
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3090 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3091 = data
  i3090.m_Limit = i3091[0]
  i3090.m_Bounciness = i3091[1]
  i3090.m_ContactDistance = i3091[2]
  return i3090
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3092 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3093 = data
  i3092.m_ExtremumSlip = i3093[0]
  i3092.m_ExtremumValue = i3093[1]
  i3092.m_AsymptoteSlip = i3093[2]
  i3092.m_AsymptoteValue = i3093[3]
  i3092.m_Stiffness = i3093[4]
  return i3092
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3094 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3095 = data
  i3094.m_LowerAngle = i3095[0]
  i3094.m_UpperAngle = i3095[1]
  return i3094
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3096 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3097 = data
  i3096.m_MotorSpeed = i3097[0]
  i3096.m_MaximumMotorTorque = i3097[1]
  return i3096
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3098 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3099 = data
  i3098.m_DampingRatio = i3099[0]
  i3098.m_Frequency = i3099[1]
  i3098.m_Angle = i3099[2]
  return i3098
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3100 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3101 = data
  i3100.m_LowerTranslation = i3101[0]
  i3100.m_UpperTranslation = i3101[1]
  return i3100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3103 = data
  i3102.position = new pc.Vec3( i3103[0], i3103[1], i3103[2] )
  i3102.scale = new pc.Vec3( i3103[3], i3103[4], i3103[5] )
  i3102.rotation = new pc.Quat(i3103[6], i3103[7], i3103[8], i3103[9])
  return i3102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3105 = data
  request.r(i3105[0], i3105[1], 0, i3104, 'sharedMesh')
  return i3104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3107 = data
  request.r(i3107[0], i3107[1], 0, i3106, 'additionalVertexStreams')
  i3106.enabled = !!i3107[2]
  request.r(i3107[3], i3107[4], 0, i3106, 'sharedMaterial')
  var i3109 = i3107[5]
  var i3108 = []
  for(var i = 0; i < i3109.length; i += 2) {
  request.r(i3109[i + 0], i3109[i + 1], 2, i3108, '')
  }
  i3106.sharedMaterials = i3108
  i3106.receiveShadows = !!i3107[6]
  i3106.shadowCastingMode = i3107[7]
  i3106.sortingLayerID = i3107[8]
  i3106.sortingOrder = i3107[9]
  i3106.lightmapIndex = i3107[10]
  i3106.lightmapSceneIndex = i3107[11]
  i3106.lightmapScaleOffset = new pc.Vec4( i3107[12], i3107[13], i3107[14], i3107[15] )
  i3106.lightProbeUsage = i3107[16]
  i3106.reflectionProbeUsage = i3107[17]
  return i3106
}

Deserializers["Case"] = function (request, data, root) {
  var i3112 = root || request.c( 'Case' )
  var i3113 = data
  i3112.lineIndex = i3113[0]
  i3112.caseColor = new pc.Color(i3113[1], i3113[2], i3113[3], i3113[4])
  return i3112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3115 = data
  i3114.name = i3115[0]
  i3114.tagId = i3115[1]
  i3114.enabled = !!i3115[2]
  i3114.isStatic = !!i3115[3]
  i3114.layer = i3115[4]
  return i3114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3117 = data
  i3116.name = i3117[0]
  i3116.halfPrecision = !!i3117[1]
  i3116.useUInt32IndexFormat = !!i3117[2]
  i3116.vertexCount = i3117[3]
  i3116.aabb = i3117[4]
  var i3119 = i3117[5]
  var i3118 = []
  for(var i = 0; i < i3119.length; i += 1) {
    i3118.push( !!i3119[i + 0] );
  }
  i3116.streams = i3118
  i3116.vertices = i3117[6]
  var i3121 = i3117[7]
  var i3120 = []
  for(var i = 0; i < i3121.length; i += 1) {
    i3120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3121[i + 0]) );
  }
  i3116.subMeshes = i3120
  var i3123 = i3117[8]
  var i3122 = []
  for(var i = 0; i < i3123.length; i += 16) {
    i3122.push( new pc.Mat4().setData(i3123[i + 0], i3123[i + 1], i3123[i + 2], i3123[i + 3],  i3123[i + 4], i3123[i + 5], i3123[i + 6], i3123[i + 7],  i3123[i + 8], i3123[i + 9], i3123[i + 10], i3123[i + 11],  i3123[i + 12], i3123[i + 13], i3123[i + 14], i3123[i + 15]) );
  }
  i3116.bindposes = i3122
  var i3125 = i3117[9]
  var i3124 = []
  for(var i = 0; i < i3125.length; i += 1) {
    i3124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3125[i + 0]) );
  }
  i3116.blendShapes = i3124
  return i3116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3131 = data
  i3130.triangles = i3131[0]
  return i3130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3137 = data
  i3136.name = i3137[0]
  var i3139 = i3137[1]
  var i3138 = []
  for(var i = 0; i < i3139.length; i += 1) {
    i3138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3139[i + 0]) );
  }
  i3136.frames = i3138
  return i3136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3140 = root || new pc.UnityMaterial()
  var i3141 = data
  i3140.name = i3141[0]
  request.r(i3141[1], i3141[2], 0, i3140, 'shader')
  i3140.renderQueue = i3141[3]
  i3140.enableInstancing = !!i3141[4]
  var i3143 = i3141[5]
  var i3142 = []
  for(var i = 0; i < i3143.length; i += 1) {
    i3142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3143[i + 0]) );
  }
  i3140.floatParameters = i3142
  var i3145 = i3141[6]
  var i3144 = []
  for(var i = 0; i < i3145.length; i += 1) {
    i3144.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3145[i + 0]) );
  }
  i3140.colorParameters = i3144
  var i3147 = i3141[7]
  var i3146 = []
  for(var i = 0; i < i3147.length; i += 1) {
    i3146.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3147[i + 0]) );
  }
  i3140.vectorParameters = i3146
  var i3149 = i3141[8]
  var i3148 = []
  for(var i = 0; i < i3149.length; i += 1) {
    i3148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3149[i + 0]) );
  }
  i3140.textureParameters = i3148
  var i3151 = i3141[9]
  var i3150 = []
  for(var i = 0; i < i3151.length; i += 1) {
    i3150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3151[i + 0]) );
  }
  i3140.materialFlags = i3150
  return i3140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3155 = data
  i3154.name = i3155[0]
  i3154.value = i3155[1]
  return i3154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3159 = data
  i3158.name = i3159[0]
  i3158.value = new pc.Color(i3159[1], i3159[2], i3159[3], i3159[4])
  return i3158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3163 = data
  i3162.name = i3163[0]
  i3162.value = new pc.Vec4( i3163[1], i3163[2], i3163[3], i3163[4] )
  return i3162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3167 = data
  i3166.name = i3167[0]
  request.r(i3167[1], i3167[2], 0, i3166, 'value')
  return i3166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3171 = data
  i3170.name = i3171[0]
  i3170.enabled = !!i3171[1]
  return i3170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3173 = data
  i3172.center = new pc.Vec3( i3173[0], i3173[1], i3173[2] )
  i3172.size = new pc.Vec3( i3173[3], i3173[4], i3173[5] )
  i3172.enabled = !!i3173[6]
  i3172.isTrigger = !!i3173[7]
  request.r(i3173[8], i3173[9], 0, i3172, 'material')
  return i3172
}

Deserializers["Bottle"] = function (request, data, root) {
  var i3174 = root || request.c( 'Bottle' )
  var i3175 = data
  i3174.bottleColor = new pc.Color(i3175[0], i3175[1], i3175[2], i3175[3])
  return i3174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3177 = data
  i3176.pivot = new pc.Vec2( i3177[0], i3177[1] )
  i3176.anchorMin = new pc.Vec2( i3177[2], i3177[3] )
  i3176.anchorMax = new pc.Vec2( i3177[4], i3177[5] )
  i3176.sizeDelta = new pc.Vec2( i3177[6], i3177[7] )
  i3176.anchoredPosition3D = new pc.Vec3( i3177[8], i3177[9], i3177[10] )
  i3176.rotation = new pc.Quat(i3177[11], i3177[12], i3177[13], i3177[14])
  i3176.scale = new pc.Vec3( i3177[15], i3177[16], i3177[17] )
  return i3176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3179 = data
  i3178.cullTransparentMesh = !!i3179[0]
  return i3178
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3180 = root || request.c( 'UnityEngine.UI.Image' )
  var i3181 = data
  request.r(i3181[0], i3181[1], 0, i3180, 'm_Sprite')
  i3180.m_Type = i3181[2]
  i3180.m_PreserveAspect = !!i3181[3]
  i3180.m_FillCenter = !!i3181[4]
  i3180.m_FillMethod = i3181[5]
  i3180.m_FillAmount = i3181[6]
  i3180.m_FillClockwise = !!i3181[7]
  i3180.m_FillOrigin = i3181[8]
  i3180.m_UseSpriteMesh = !!i3181[9]
  i3180.m_PixelsPerUnitMultiplier = i3181[10]
  request.r(i3181[11], i3181[12], 0, i3180, 'm_Material')
  i3180.m_Maskable = !!i3181[13]
  i3180.m_Color = new pc.Color(i3181[14], i3181[15], i3181[16], i3181[17])
  i3180.m_RaycastTarget = !!i3181[18]
  i3180.m_RaycastPadding = new pc.Vec4( i3181[19], i3181[20], i3181[21], i3181[22] )
  return i3180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3183 = data
  i3182.name = i3183[0]
  i3182.width = i3183[1]
  i3182.height = i3183[2]
  i3182.mipmapCount = i3183[3]
  i3182.anisoLevel = i3183[4]
  i3182.filterMode = i3183[5]
  i3182.hdr = !!i3183[6]
  i3182.format = i3183[7]
  i3182.wrapMode = i3183[8]
  i3182.alphaIsTransparency = !!i3183[9]
  i3182.alphaSource = i3183[10]
  i3182.graphicsFormat = i3183[11]
  i3182.sRGBTexture = !!i3183[12]
  i3182.desiredColorSpace = i3183[13]
  i3182.wrapU = i3183[14]
  i3182.wrapV = i3183[15]
  return i3182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3185 = data
  i3184.name = i3185[0]
  i3184.atlasId = i3185[1]
  i3184.mipmapCount = i3185[2]
  i3184.hdr = !!i3185[3]
  i3184.size = i3185[4]
  i3184.anisoLevel = i3185[5]
  i3184.filterMode = i3185[6]
  var i3187 = i3185[7]
  var i3186 = []
  for(var i = 0; i < i3187.length; i += 4) {
    i3186.push( UnityEngine.Rect.MinMaxRect(i3187[i + 0], i3187[i + 1], i3187[i + 2], i3187[i + 3]) );
  }
  i3184.rects = i3186
  i3184.wrapU = i3185[8]
  i3184.wrapV = i3185[9]
  return i3184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3191 = data
  i3190.name = i3191[0]
  i3190.index = i3191[1]
  i3190.startup = !!i3191[2]
  return i3190
}

Deserializers["PuzzleManager"] = function (request, data, root) {
  var i3192 = root || request.c( 'PuzzleManager' )
  var i3193 = data
  var i3195 = i3193[0]
  var i3194 = new (System.Collections.Generic.List$1(Bridge.ns('Case')))
  for(var i = 0; i < i3195.length; i += 2) {
  request.r(i3195[i + 0], i3195[i + 1], 1, i3194, '')
  }
  i3192.AllCases = i3194
  var i3197 = i3193[1]
  var i3196 = []
  for(var i = 0; i < i3197.length; i += 2) {
  request.r(i3197[i + 0], i3197[i + 1], 2, i3196, '')
  }
  i3192.goodEffectPrefabs = i3196
  request.r(i3193[2], i3193[3], 0, i3192, 'uiCanvas')
  return i3192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3203 = data
  i3202.enabled = !!i3203[0]
  i3202.aspect = i3203[1]
  i3202.orthographic = !!i3203[2]
  i3202.orthographicSize = i3203[3]
  i3202.backgroundColor = new pc.Color(i3203[4], i3203[5], i3203[6], i3203[7])
  i3202.nearClipPlane = i3203[8]
  i3202.farClipPlane = i3203[9]
  i3202.fieldOfView = i3203[10]
  i3202.depth = i3203[11]
  i3202.clearFlags = i3203[12]
  i3202.cullingMask = i3203[13]
  i3202.rect = i3203[14]
  request.r(i3203[15], i3203[16], 0, i3202, 'targetTexture')
  i3202.usePhysicalProperties = !!i3203[17]
  i3202.focalLength = i3203[18]
  i3202.sensorSize = new pc.Vec2( i3203[19], i3203[20] )
  i3202.lensShift = new pc.Vec2( i3203[21], i3203[22] )
  i3202.gateFit = i3203[23]
  i3202.commandBufferCount = i3203[24]
  i3202.cameraType = i3203[25]
  return i3202
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i3204 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i3205 = data
  i3204.m_RenderShadows = !!i3205[0]
  i3204.m_RequiresDepthTextureOption = i3205[1]
  i3204.m_RequiresOpaqueTextureOption = i3205[2]
  i3204.m_CameraType = i3205[3]
  var i3207 = i3205[4]
  var i3206 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i3207.length; i += 2) {
  request.r(i3207[i + 0], i3207[i + 1], 1, i3206, '')
  }
  i3204.m_Cameras = i3206
  i3204.m_RendererIndex = i3205[5]
  i3204.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i3205[6] )
  request.r(i3205[7], i3205[8], 0, i3204, 'm_VolumeTrigger')
  i3204.m_VolumeFrameworkUpdateModeOption = i3205[9]
  i3204.m_RenderPostProcessing = !!i3205[10]
  i3204.m_Antialiasing = i3205[11]
  i3204.m_AntialiasingQuality = i3205[12]
  i3204.m_StopNaN = !!i3205[13]
  i3204.m_Dithering = !!i3205[14]
  i3204.m_ClearDepth = !!i3205[15]
  i3204.m_AllowXRRendering = !!i3205[16]
  i3204.m_AllowHDROutput = !!i3205[17]
  i3204.m_UseScreenCoordOverride = !!i3205[18]
  i3204.m_ScreenSizeOverride = new pc.Vec4( i3205[19], i3205[20], i3205[21], i3205[22] )
  i3204.m_ScreenCoordScaleBias = new pc.Vec4( i3205[23], i3205[24], i3205[25], i3205[26] )
  i3204.m_RequiresDepthTexture = !!i3205[27]
  i3204.m_RequiresColorTexture = !!i3205[28]
  i3204.m_Version = i3205[29]
  i3204.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i3205[30], i3204.m_TaaSettings)
  return i3204
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i3210 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i3211 = data
  i3210.m_Quality = i3211[0]
  i3210.m_FrameInfluence = i3211[1]
  i3210.m_JitterScale = i3211[2]
  i3210.m_MipBias = i3211[3]
  i3210.m_VarianceClampScale = i3211[4]
  i3210.m_ContrastAdaptiveSharpening = i3211[5]
  return i3210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3213 = data
  i3212.enabled = !!i3213[0]
  i3212.planeDistance = i3213[1]
  i3212.referencePixelsPerUnit = i3213[2]
  i3212.isFallbackOverlay = !!i3213[3]
  i3212.renderMode = i3213[4]
  i3212.renderOrder = i3213[5]
  i3212.sortingLayerName = i3213[6]
  i3212.sortingOrder = i3213[7]
  i3212.scaleFactor = i3213[8]
  request.r(i3213[9], i3213[10], 0, i3212, 'worldCamera')
  i3212.overrideSorting = !!i3213[11]
  i3212.pixelPerfect = !!i3213[12]
  i3212.targetDisplay = i3213[13]
  i3212.overridePixelPerfect = !!i3213[14]
  return i3212
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3214 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3215 = data
  i3214.m_UiScaleMode = i3215[0]
  i3214.m_ReferencePixelsPerUnit = i3215[1]
  i3214.m_ScaleFactor = i3215[2]
  i3214.m_ReferenceResolution = new pc.Vec2( i3215[3], i3215[4] )
  i3214.m_ScreenMatchMode = i3215[5]
  i3214.m_MatchWidthOrHeight = i3215[6]
  i3214.m_PhysicalUnit = i3215[7]
  i3214.m_FallbackScreenDPI = i3215[8]
  i3214.m_DefaultSpriteDPI = i3215[9]
  i3214.m_DynamicPixelsPerUnit = i3215[10]
  i3214.m_PresetInfoIsWorld = !!i3215[11]
  return i3214
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3216 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3217 = data
  i3216.m_IgnoreReversedGraphics = !!i3217[0]
  i3216.m_BlockingObjects = i3217[1]
  i3216.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3217[2] )
  return i3216
}

Deserializers["UIScaler"] = function (request, data, root) {
  var i3218 = root || request.c( 'UIScaler' )
  var i3219 = data
  request.r(i3219[0], i3219[1], 0, i3218, 'topImage')
  request.r(i3219[2], i3219[3], 0, i3218, 'middleImage')
  request.r(i3219[4], i3219[5], 0, i3218, 'bottomButton')
  i3218.aspectThreshold = i3219[6]
  return i3218
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3220 = root || request.c( 'UnityEngine.UI.Button' )
  var i3221 = data
  i3220.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3221[0], i3220.m_OnClick)
  i3220.m_Navigation = request.d('UnityEngine.UI.Navigation', i3221[1], i3220.m_Navigation)
  i3220.m_Transition = i3221[2]
  i3220.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3221[3], i3220.m_Colors)
  i3220.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3221[4], i3220.m_SpriteState)
  i3220.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3221[5], i3220.m_AnimationTriggers)
  i3220.m_Interactable = !!i3221[6]
  request.r(i3221[7], i3221[8], 0, i3220, 'm_TargetGraphic')
  return i3220
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3222 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3223 = data
  i3222.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3223[0], i3222.m_PersistentCalls)
  return i3222
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3224 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3225 = data
  var i3227 = i3225[0]
  var i3226 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3227.length; i += 1) {
    i3226.add(request.d('UnityEngine.Events.PersistentCall', i3227[i + 0]));
  }
  i3224.m_Calls = i3226
  return i3224
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3230 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3231 = data
  request.r(i3231[0], i3231[1], 0, i3230, 'm_Target')
  i3230.m_TargetAssemblyTypeName = i3231[2]
  i3230.m_MethodName = i3231[3]
  i3230.m_Mode = i3231[4]
  i3230.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3231[5], i3230.m_Arguments)
  i3230.m_CallState = i3231[6]
  return i3230
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3232 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3233 = data
  i3232.m_Mode = i3233[0]
  i3232.m_WrapAround = !!i3233[1]
  request.r(i3233[2], i3233[3], 0, i3232, 'm_SelectOnUp')
  request.r(i3233[4], i3233[5], 0, i3232, 'm_SelectOnDown')
  request.r(i3233[6], i3233[7], 0, i3232, 'm_SelectOnLeft')
  request.r(i3233[8], i3233[9], 0, i3232, 'm_SelectOnRight')
  return i3232
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3234 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3235 = data
  i3234.m_NormalColor = new pc.Color(i3235[0], i3235[1], i3235[2], i3235[3])
  i3234.m_HighlightedColor = new pc.Color(i3235[4], i3235[5], i3235[6], i3235[7])
  i3234.m_PressedColor = new pc.Color(i3235[8], i3235[9], i3235[10], i3235[11])
  i3234.m_SelectedColor = new pc.Color(i3235[12], i3235[13], i3235[14], i3235[15])
  i3234.m_DisabledColor = new pc.Color(i3235[16], i3235[17], i3235[18], i3235[19])
  i3234.m_ColorMultiplier = i3235[20]
  i3234.m_FadeDuration = i3235[21]
  return i3234
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3236 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3237 = data
  request.r(i3237[0], i3237[1], 0, i3236, 'm_HighlightedSprite')
  request.r(i3237[2], i3237[3], 0, i3236, 'm_PressedSprite')
  request.r(i3237[4], i3237[5], 0, i3236, 'm_SelectedSprite')
  request.r(i3237[6], i3237[7], 0, i3236, 'm_DisabledSprite')
  return i3236
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3238 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3239 = data
  i3238.m_NormalTrigger = i3239[0]
  i3238.m_HighlightedTrigger = i3239[1]
  i3238.m_PressedTrigger = i3239[2]
  i3238.m_SelectedTrigger = i3239[3]
  i3238.m_DisabledTrigger = i3239[4]
  return i3238
}

Deserializers["ButtonPulse"] = function (request, data, root) {
  var i3240 = root || request.c( 'ButtonPulse' )
  var i3241 = data
  i3240.scaleMultiplier = i3241[0]
  i3240.duration = i3241[1]
  return i3240
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3242 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3243 = data
  i3242.m_hasFontAssetChanged = !!i3243[0]
  request.r(i3243[1], i3243[2], 0, i3242, 'm_baseMaterial')
  i3242.m_maskOffset = new pc.Vec4( i3243[3], i3243[4], i3243[5], i3243[6] )
  i3242.m_text = i3243[7]
  i3242.m_isRightToLeft = !!i3243[8]
  request.r(i3243[9], i3243[10], 0, i3242, 'm_fontAsset')
  request.r(i3243[11], i3243[12], 0, i3242, 'm_sharedMaterial')
  var i3245 = i3243[13]
  var i3244 = []
  for(var i = 0; i < i3245.length; i += 2) {
  request.r(i3245[i + 0], i3245[i + 1], 2, i3244, '')
  }
  i3242.m_fontSharedMaterials = i3244
  request.r(i3243[14], i3243[15], 0, i3242, 'm_fontMaterial')
  var i3247 = i3243[16]
  var i3246 = []
  for(var i = 0; i < i3247.length; i += 2) {
  request.r(i3247[i + 0], i3247[i + 1], 2, i3246, '')
  }
  i3242.m_fontMaterials = i3246
  i3242.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3243[17], i3243[18], i3243[19], i3243[20])
  i3242.m_fontColor = new pc.Color(i3243[21], i3243[22], i3243[23], i3243[24])
  i3242.m_enableVertexGradient = !!i3243[25]
  i3242.m_colorMode = i3243[26]
  i3242.m_fontColorGradient = request.d('TMPro.VertexGradient', i3243[27], i3242.m_fontColorGradient)
  request.r(i3243[28], i3243[29], 0, i3242, 'm_fontColorGradientPreset')
  request.r(i3243[30], i3243[31], 0, i3242, 'm_spriteAsset')
  i3242.m_tintAllSprites = !!i3243[32]
  request.r(i3243[33], i3243[34], 0, i3242, 'm_StyleSheet')
  i3242.m_TextStyleHashCode = i3243[35]
  i3242.m_overrideHtmlColors = !!i3243[36]
  i3242.m_faceColor = UnityEngine.Color32.ConstructColor(i3243[37], i3243[38], i3243[39], i3243[40])
  i3242.m_fontSize = i3243[41]
  i3242.m_fontSizeBase = i3243[42]
  i3242.m_fontWeight = i3243[43]
  i3242.m_enableAutoSizing = !!i3243[44]
  i3242.m_fontSizeMin = i3243[45]
  i3242.m_fontSizeMax = i3243[46]
  i3242.m_fontStyle = i3243[47]
  i3242.m_HorizontalAlignment = i3243[48]
  i3242.m_VerticalAlignment = i3243[49]
  i3242.m_textAlignment = i3243[50]
  i3242.m_characterSpacing = i3243[51]
  i3242.m_wordSpacing = i3243[52]
  i3242.m_lineSpacing = i3243[53]
  i3242.m_lineSpacingMax = i3243[54]
  i3242.m_paragraphSpacing = i3243[55]
  i3242.m_charWidthMaxAdj = i3243[56]
  i3242.m_enableWordWrapping = !!i3243[57]
  i3242.m_wordWrappingRatios = i3243[58]
  i3242.m_overflowMode = i3243[59]
  request.r(i3243[60], i3243[61], 0, i3242, 'm_linkedTextComponent')
  request.r(i3243[62], i3243[63], 0, i3242, 'parentLinkedComponent')
  i3242.m_enableKerning = !!i3243[64]
  i3242.m_enableExtraPadding = !!i3243[65]
  i3242.checkPaddingRequired = !!i3243[66]
  i3242.m_isRichText = !!i3243[67]
  i3242.m_parseCtrlCharacters = !!i3243[68]
  i3242.m_isOrthographic = !!i3243[69]
  i3242.m_isCullingEnabled = !!i3243[70]
  i3242.m_horizontalMapping = i3243[71]
  i3242.m_verticalMapping = i3243[72]
  i3242.m_uvLineOffset = i3243[73]
  i3242.m_geometrySortingOrder = i3243[74]
  i3242.m_IsTextObjectScaleStatic = !!i3243[75]
  i3242.m_VertexBufferAutoSizeReduction = !!i3243[76]
  i3242.m_useMaxVisibleDescender = !!i3243[77]
  i3242.m_pageToDisplay = i3243[78]
  i3242.m_margin = new pc.Vec4( i3243[79], i3243[80], i3243[81], i3243[82] )
  i3242.m_isUsingLegacyAnimationComponent = !!i3243[83]
  i3242.m_isVolumetricText = !!i3243[84]
  request.r(i3243[85], i3243[86], 0, i3242, 'm_Material')
  i3242.m_Maskable = !!i3243[87]
  i3242.m_Color = new pc.Color(i3243[88], i3243[89], i3243[90], i3243[91])
  i3242.m_RaycastTarget = !!i3243[92]
  i3242.m_RaycastPadding = new pc.Vec4( i3243[93], i3243[94], i3243[95], i3243[96] )
  return i3242
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3248 = root || request.c( 'TMPro.VertexGradient' )
  var i3249 = data
  i3248.topLeft = new pc.Color(i3249[0], i3249[1], i3249[2], i3249[3])
  i3248.topRight = new pc.Color(i3249[4], i3249[5], i3249[6], i3249[7])
  i3248.bottomLeft = new pc.Color(i3249[8], i3249[9], i3249[10], i3249[11])
  i3248.bottomRight = new pc.Color(i3249[12], i3249[13], i3249[14], i3249[15])
  return i3248
}

Deserializers["TextHint"] = function (request, data, root) {
  var i3250 = root || request.c( 'TextHint' )
  var i3251 = data
  request.r(i3251[0], i3251[1], 0, i3250, 'hintText')
  i3250.scaleAmount = i3251[2]
  i3250.duration = i3251[3]
  return i3250
}

Deserializers["TimerSlider"] = function (request, data, root) {
  var i3252 = root || request.c( 'TimerSlider' )
  var i3253 = data
  request.r(i3253[0], i3253[1], 0, i3252, 'timerSlider')
  i3252.totalTime = i3253[2]
  request.r(i3253[3], i3253[4], 0, i3252, 'resultPanel')
  return i3252
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i3254 = root || request.c( 'UnityEngine.UI.Slider' )
  var i3255 = data
  request.r(i3255[0], i3255[1], 0, i3254, 'm_FillRect')
  request.r(i3255[2], i3255[3], 0, i3254, 'm_HandleRect')
  i3254.m_Direction = i3255[4]
  i3254.m_MinValue = i3255[5]
  i3254.m_MaxValue = i3255[6]
  i3254.m_WholeNumbers = !!i3255[7]
  i3254.m_Value = i3255[8]
  i3254.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i3255[9], i3254.m_OnValueChanged)
  i3254.m_Navigation = request.d('UnityEngine.UI.Navigation', i3255[10], i3254.m_Navigation)
  i3254.m_Transition = i3255[11]
  i3254.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3255[12], i3254.m_Colors)
  i3254.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3255[13], i3254.m_SpriteState)
  i3254.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3255[14], i3254.m_AnimationTriggers)
  i3254.m_Interactable = !!i3255[15]
  request.r(i3255[16], i3255[17], 0, i3254, 'm_TargetGraphic')
  return i3254
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i3256 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i3257 = data
  i3256.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3257[0], i3256.m_PersistentCalls)
  return i3256
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i3258 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i3259 = data
  i3258.priority = i3259[0]
  i3258.blendDistance = i3259[1]
  i3258.weight = i3259[2]
  request.r(i3259[3], i3259[4], 0, i3258, 'sharedProfile')
  i3258.m_IsGlobal = !!i3259[5]
  return i3258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i3260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i3261 = data
  i3260.enabled = !!i3261[0]
  i3260.type = i3261[1]
  i3260.color = new pc.Color(i3261[2], i3261[3], i3261[4], i3261[5])
  i3260.cullingMask = i3261[6]
  i3260.intensity = i3261[7]
  i3260.range = i3261[8]
  i3260.spotAngle = i3261[9]
  i3260.shadows = i3261[10]
  i3260.shadowNormalBias = i3261[11]
  i3260.shadowBias = i3261[12]
  i3260.shadowStrength = i3261[13]
  i3260.shadowResolution = i3261[14]
  i3260.lightmapBakeType = i3261[15]
  i3260.renderMode = i3261[16]
  request.r(i3261[17], i3261[18], 0, i3260, 'cookie')
  i3260.cookieSize = i3261[19]
  return i3260
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i3262 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i3263 = data
  i3262.m_Version = i3263[0]
  i3262.m_UsePipelineSettings = !!i3263[1]
  i3262.m_AdditionalLightsShadowResolutionTier = i3263[2]
  i3262.m_LightLayerMask = i3263[3]
  i3262.m_RenderingLayers = i3263[4]
  i3262.m_CustomShadowLayers = !!i3263[5]
  i3262.m_ShadowLayerMask = i3263[6]
  i3262.m_ShadowRenderingLayers = i3263[7]
  i3262.m_LightCookieSize = new pc.Vec2( i3263[8], i3263[9] )
  i3262.m_LightCookieOffset = new pc.Vec2( i3263[10], i3263[11] )
  i3262.m_SoftShadowQuality = i3263[12]
  return i3262
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3264 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3265 = data
  request.r(i3265[0], i3265[1], 0, i3264, 'm_FirstSelected')
  i3264.m_sendNavigationEvents = !!i3265[2]
  i3264.m_DragThreshold = i3265[3]
  return i3264
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3266 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3267 = data
  i3266.m_HorizontalAxis = i3267[0]
  i3266.m_VerticalAxis = i3267[1]
  i3266.m_SubmitButton = i3267[2]
  i3266.m_CancelButton = i3267[3]
  i3266.m_InputActionsPerSecond = i3267[4]
  i3266.m_RepeatDelay = i3267[5]
  i3266.m_ForceModuleActive = !!i3267[6]
  i3266.m_SendPointerHoverToParent = !!i3267[7]
  return i3266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3269 = data
  i3268.ambientIntensity = i3269[0]
  i3268.reflectionIntensity = i3269[1]
  i3268.ambientMode = i3269[2]
  i3268.ambientLight = new pc.Color(i3269[3], i3269[4], i3269[5], i3269[6])
  i3268.ambientSkyColor = new pc.Color(i3269[7], i3269[8], i3269[9], i3269[10])
  i3268.ambientGroundColor = new pc.Color(i3269[11], i3269[12], i3269[13], i3269[14])
  i3268.ambientEquatorColor = new pc.Color(i3269[15], i3269[16], i3269[17], i3269[18])
  i3268.fogColor = new pc.Color(i3269[19], i3269[20], i3269[21], i3269[22])
  i3268.fogEndDistance = i3269[23]
  i3268.fogStartDistance = i3269[24]
  i3268.fogDensity = i3269[25]
  i3268.fog = !!i3269[26]
  request.r(i3269[27], i3269[28], 0, i3268, 'skybox')
  i3268.fogMode = i3269[29]
  var i3271 = i3269[30]
  var i3270 = []
  for(var i = 0; i < i3271.length; i += 1) {
    i3270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3271[i + 0]) );
  }
  i3268.lightmaps = i3270
  i3268.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3269[31], i3268.lightProbes)
  i3268.lightmapsMode = i3269[32]
  i3268.mixedBakeMode = i3269[33]
  i3268.environmentLightingMode = i3269[34]
  i3268.ambientProbe = new pc.SphericalHarmonicsL2(i3269[35])
  i3268.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3269[36])
  i3268.useReferenceAmbientProbe = !!i3269[37]
  request.r(i3269[38], i3269[39], 0, i3268, 'customReflection')
  request.r(i3269[40], i3269[41], 0, i3268, 'defaultReflection')
  i3268.defaultReflectionMode = i3269[42]
  i3268.defaultReflectionResolution = i3269[43]
  i3268.sunLightObjectId = i3269[44]
  i3268.pixelLightCount = i3269[45]
  i3268.defaultReflectionHDR = !!i3269[46]
  i3268.hasLightDataAsset = !!i3269[47]
  i3268.hasManualGenerate = !!i3269[48]
  return i3268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3275 = data
  request.r(i3275[0], i3275[1], 0, i3274, 'lightmapColor')
  request.r(i3275[2], i3275[3], 0, i3274, 'lightmapDirection')
  return i3274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3276 = root || new UnityEngine.LightProbes()
  var i3277 = data
  return i3276
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i3284 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i3285 = data
  request.r(i3285[0], i3285[1], 0, i3284, 'panelPrefab')
  var i3287 = i3285[2]
  var i3286 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i3287.length; i += 1) {
    i3286.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i3287[i + 0]));
  }
  i3284.prefabs = i3286
  return i3284
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i3290 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i3291 = data
  i3290.type = i3291[0]
  request.r(i3291[1], i3291[2], 0, i3290, 'prefab')
  return i3290
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i3292 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i3293 = data
  i3292.m_Spacing = i3293[0]
  i3292.m_ChildForceExpandWidth = !!i3293[1]
  i3292.m_ChildForceExpandHeight = !!i3293[2]
  i3292.m_ChildControlWidth = !!i3293[3]
  i3292.m_ChildControlHeight = !!i3293[4]
  i3292.m_ChildScaleWidth = !!i3293[5]
  i3292.m_ChildScaleHeight = !!i3293[6]
  i3292.m_ReverseArrangement = !!i3293[7]
  i3292.m_Padding = UnityEngine.RectOffset.FromPaddings(i3293[8], i3293[9], i3293[10], i3293[11])
  i3292.m_ChildAlignment = i3293[12]
  return i3292
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i3294 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i3295 = data
  i3294.m_HorizontalFit = i3295[0]
  i3294.m_VerticalFit = i3295[1]
  return i3294
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i3296 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i3297 = data
  request.r(i3297[0], i3297[1], 0, i3296, 'contentHolder')
  return i3296
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i3298 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i3299 = data
  request.r(i3299[0], i3299[1], 0, i3298, 'nameLabel')
  request.r(i3299[2], i3299[3], 0, i3298, 'scrollRect')
  request.r(i3299[4], i3299[5], 0, i3298, 'viewport')
  request.r(i3299[6], i3299[7], 0, i3298, 'Canvas')
  return i3298
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i3300 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i3301 = data
  i3300.m_IgnoreLayout = !!i3301[0]
  i3300.m_MinWidth = i3301[1]
  i3300.m_MinHeight = i3301[2]
  i3300.m_PreferredWidth = i3301[3]
  i3300.m_PreferredHeight = i3301[4]
  i3300.m_FlexibleWidth = i3301[5]
  i3300.m_FlexibleHeight = i3301[6]
  i3300.m_LayoutPriority = i3301[7]
  return i3300
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3302 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3303 = data
  request.r(i3303[0], i3303[1], 0, i3302, 'm_ObjectArgument')
  i3302.m_ObjectArgumentAssemblyTypeName = i3303[2]
  i3302.m_IntArgument = i3303[3]
  i3302.m_FloatArgument = i3303[4]
  i3302.m_StringArgument = i3303[5]
  i3302.m_BoolArgument = !!i3303[6]
  return i3302
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3304 = root || request.c( 'UnityEngine.UI.Text' )
  var i3305 = data
  i3304.m_FontData = request.d('UnityEngine.UI.FontData', i3305[0], i3304.m_FontData)
  i3304.m_Text = i3305[1]
  request.r(i3305[2], i3305[3], 0, i3304, 'm_Material')
  i3304.m_Maskable = !!i3305[4]
  i3304.m_Color = new pc.Color(i3305[5], i3305[6], i3305[7], i3305[8])
  i3304.m_RaycastTarget = !!i3305[9]
  i3304.m_RaycastPadding = new pc.Vec4( i3305[10], i3305[11], i3305[12], i3305[13] )
  return i3304
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3306 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3307 = data
  request.r(i3307[0], i3307[1], 0, i3306, 'm_Font')
  i3306.m_FontSize = i3307[2]
  i3306.m_FontStyle = i3307[3]
  i3306.m_BestFit = !!i3307[4]
  i3306.m_MinSize = i3307[5]
  i3306.m_MaxSize = i3307[6]
  i3306.m_Alignment = i3307[7]
  i3306.m_AlignByGeometry = !!i3307[8]
  i3306.m_RichText = !!i3307[9]
  i3306.m_HorizontalOverflow = i3307[10]
  i3306.m_VerticalOverflow = i3307[11]
  i3306.m_LineSpacing = i3307[12]
  return i3306
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i3308 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i3309 = data
  request.r(i3309[0], i3309[1], 0, i3308, 'm_Content')
  i3308.m_Horizontal = !!i3309[2]
  i3308.m_Vertical = !!i3309[3]
  i3308.m_MovementType = i3309[4]
  i3308.m_Elasticity = i3309[5]
  i3308.m_Inertia = !!i3309[6]
  i3308.m_DecelerationRate = i3309[7]
  i3308.m_ScrollSensitivity = i3309[8]
  request.r(i3309[9], i3309[10], 0, i3308, 'm_Viewport')
  request.r(i3309[11], i3309[12], 0, i3308, 'm_HorizontalScrollbar')
  request.r(i3309[13], i3309[14], 0, i3308, 'm_VerticalScrollbar')
  i3308.m_HorizontalScrollbarVisibility = i3309[15]
  i3308.m_VerticalScrollbarVisibility = i3309[16]
  i3308.m_HorizontalScrollbarSpacing = i3309[17]
  i3308.m_VerticalScrollbarSpacing = i3309[18]
  i3308.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i3309[19], i3308.m_OnValueChanged)
  return i3308
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i3310 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i3311 = data
  i3310.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3311[0], i3310.m_PersistentCalls)
  return i3310
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i3312 = root || request.c( 'UnityEngine.UI.Mask' )
  var i3313 = data
  i3312.m_ShowMaskGraphic = !!i3313[0]
  return i3312
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i3314 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i3315 = data
  request.r(i3315[0], i3315[1], 0, i3314, 'm_HandleRect')
  i3314.m_Direction = i3315[2]
  i3314.m_Value = i3315[3]
  i3314.m_Size = i3315[4]
  i3314.m_NumberOfSteps = i3315[5]
  i3314.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i3315[6], i3314.m_OnValueChanged)
  i3314.m_Navigation = request.d('UnityEngine.UI.Navigation', i3315[7], i3314.m_Navigation)
  i3314.m_Transition = i3315[8]
  i3314.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3315[9], i3314.m_Colors)
  i3314.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3315[10], i3314.m_SpriteState)
  i3314.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3315[11], i3314.m_AnimationTriggers)
  i3314.m_Interactable = !!i3315[12]
  request.r(i3315[13], i3315[14], 0, i3314, 'm_TargetGraphic')
  return i3314
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i3316 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i3317 = data
  i3316.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3317[0], i3316.m_PersistentCalls)
  return i3316
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i3318 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i3319 = data
  var i3321 = i3319[0]
  var i3320 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i3321.length; i += 1) {
    i3320.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i3321[i + 0]));
  }
  i3318.m_Delegates = i3320
  return i3318
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i3324 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i3325 = data
  i3324.eventID = i3325[0]
  i3324.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i3325[1], i3324.callback)
  return i3324
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i3326 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i3327 = data
  i3326.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3327[0], i3326.m_PersistentCalls)
  return i3326
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i3328 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i3329 = data
  request.r(i3329[0], i3329[1], 0, i3328, 'nameLabel')
  request.r(i3329[2], i3329[3], 0, i3328, 'valueLabel')
  i3328.colorDefault = new pc.Color(i3329[4], i3329[5], i3329[6], i3329[7])
  i3328.colorSelected = new pc.Color(i3329[8], i3329[9], i3329[10], i3329[11])
  return i3328
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i3330 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i3331 = data
  request.r(i3331[0], i3331[1], 0, i3330, 'nameLabel')
  request.r(i3331[2], i3331[3], 0, i3330, 'valueToggle')
  request.r(i3331[4], i3331[5], 0, i3330, 'checkmarkImage')
  i3330.colorDefault = new pc.Color(i3331[6], i3331[7], i3331[8], i3331[9])
  i3330.colorSelected = new pc.Color(i3331[10], i3331[11], i3331[12], i3331[13])
  return i3330
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i3332 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i3333 = data
  i3332.toggleTransition = i3333[0]
  request.r(i3333[1], i3333[2], 0, i3332, 'graphic')
  i3332.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i3333[3], i3332.onValueChanged)
  request.r(i3333[4], i3333[5], 0, i3332, 'm_Group')
  i3332.m_IsOn = !!i3333[6]
  i3332.m_Navigation = request.d('UnityEngine.UI.Navigation', i3333[7], i3332.m_Navigation)
  i3332.m_Transition = i3333[8]
  i3332.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3333[9], i3332.m_Colors)
  i3332.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3333[10], i3332.m_SpriteState)
  i3332.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3333[11], i3332.m_AnimationTriggers)
  i3332.m_Interactable = !!i3333[12]
  request.r(i3333[13], i3333[14], 0, i3332, 'm_TargetGraphic')
  return i3332
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i3334 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i3335 = data
  i3334.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3335[0], i3334.m_PersistentCalls)
  return i3334
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i3336 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i3337 = data
  request.r(i3337[0], i3337[1], 0, i3336, 'nameLabel')
  request.r(i3337[2], i3337[3], 0, i3336, 'valueLabel')
  i3336.colorDefault = new pc.Color(i3337[4], i3337[5], i3337[6], i3337[7])
  i3336.colorSelected = new pc.Color(i3337[8], i3337[9], i3337[10], i3337[11])
  return i3336
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i3338 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i3339 = data
  request.r(i3339[0], i3339[1], 0, i3338, 'nameLabel')
  request.r(i3339[2], i3339[3], 0, i3338, 'valueLabel')
  i3338.colorDefault = new pc.Color(i3339[4], i3339[5], i3339[6], i3339[7])
  i3338.colorSelected = new pc.Color(i3339[8], i3339[9], i3339[10], i3339[11])
  return i3338
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i3340 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i3341 = data
  request.r(i3341[0], i3341[1], 0, i3340, 'nameLabel')
  request.r(i3341[2], i3341[3], 0, i3340, 'valueLabel')
  i3340.colorDefault = new pc.Color(i3341[4], i3341[5], i3341[6], i3341[7])
  i3340.colorSelected = new pc.Color(i3341[8], i3341[9], i3341[10], i3341[11])
  return i3340
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i3342 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i3343 = data
  request.r(i3343[0], i3343[1], 0, i3342, 'nextButtonText')
  request.r(i3343[2], i3343[3], 0, i3342, 'previousButtonText')
  request.r(i3343[4], i3343[5], 0, i3342, 'nameLabel')
  request.r(i3343[6], i3343[7], 0, i3342, 'valueLabel')
  i3342.colorDefault = new pc.Color(i3343[8], i3343[9], i3343[10], i3343[11])
  i3342.colorSelected = new pc.Color(i3343[12], i3343[13], i3343[14], i3343[15])
  return i3342
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i3344 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i3345 = data
  request.r(i3345[0], i3345[1], 0, i3344, 'nameLabel')
  i3344.colorDefault = new pc.Color(i3345[2], i3345[3], i3345[4], i3345[5])
  i3344.colorSelected = new pc.Color(i3345[6], i3345[7], i3345[8], i3345[9])
  return i3344
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i3346 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i3347 = data
  request.r(i3347[0], i3347[1], 0, i3346, 'nameLabel')
  request.r(i3347[2], i3347[3], 0, i3346, 'valueToggle')
  i3346.colorDefault = new pc.Color(i3347[4], i3347[5], i3347[6], i3347[7])
  i3346.colorSelected = new pc.Color(i3347[8], i3347[9], i3347[10], i3347[11])
  return i3346
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i3348 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i3349 = data
  i3348.toggleTransition = i3349[0]
  request.r(i3349[1], i3349[2], 0, i3348, 'graphic')
  i3348.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i3349[3], i3348.onValueChanged)
  request.r(i3349[4], i3349[5], 0, i3348, 'content')
  request.r(i3349[6], i3349[7], 0, i3348, 'arrowOpened')
  request.r(i3349[8], i3349[9], 0, i3348, 'arrowClosed')
  request.r(i3349[10], i3349[11], 0, i3348, 'm_Group')
  i3348.m_IsOn = !!i3349[12]
  i3348.m_Navigation = request.d('UnityEngine.UI.Navigation', i3349[13], i3348.m_Navigation)
  i3348.m_Transition = i3349[14]
  i3348.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3349[15], i3348.m_Colors)
  i3348.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3349[16], i3348.m_SpriteState)
  i3348.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3349[17], i3348.m_AnimationTriggers)
  i3348.m_Interactable = !!i3349[18]
  request.r(i3349[19], i3349[20], 0, i3348, 'm_TargetGraphic')
  return i3348
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i3350 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i3351 = data
  request.r(i3351[0], i3351[1], 0, i3350, 'nameLabel')
  request.r(i3351[2], i3351[3], 0, i3350, 'valueToggle')
  request.r(i3351[4], i3351[5], 0, i3350, 'colorImage')
  request.r(i3351[6], i3351[7], 0, i3350, 'fieldR')
  request.r(i3351[8], i3351[9], 0, i3350, 'fieldG')
  request.r(i3351[10], i3351[11], 0, i3350, 'fieldB')
  request.r(i3351[12], i3351[13], 0, i3350, 'fieldA')
  i3350.colorDefault = new pc.Color(i3351[14], i3351[15], i3351[16], i3351[17])
  i3350.colorSelected = new pc.Color(i3351[18], i3351[19], i3351[20], i3351[21])
  return i3350
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i3352 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i3353 = data
  request.r(i3353[0], i3353[1], 0, i3352, 'nameLabel')
  request.r(i3353[2], i3353[3], 0, i3352, 'valueLabel')
  i3352.colorDefault = new pc.Color(i3353[4], i3353[5], i3353[6], i3353[7])
  i3352.colorSelected = new pc.Color(i3353[8], i3353[9], i3353[10], i3353[11])
  return i3352
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i3354 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i3355 = data
  request.r(i3355[0], i3355[1], 0, i3354, 'nameLabel')
  request.r(i3355[2], i3355[3], 0, i3354, 'valueToggle')
  request.r(i3355[4], i3355[5], 0, i3354, 'fieldX')
  request.r(i3355[6], i3355[7], 0, i3354, 'fieldY')
  i3354.colorDefault = new pc.Color(i3355[8], i3355[9], i3355[10], i3355[11])
  i3354.colorSelected = new pc.Color(i3355[12], i3355[13], i3355[14], i3355[15])
  return i3354
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i3356 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i3357 = data
  request.r(i3357[0], i3357[1], 0, i3356, 'nameLabel')
  request.r(i3357[2], i3357[3], 0, i3356, 'valueToggle')
  request.r(i3357[4], i3357[5], 0, i3356, 'fieldX')
  request.r(i3357[6], i3357[7], 0, i3356, 'fieldY')
  request.r(i3357[8], i3357[9], 0, i3356, 'fieldZ')
  i3356.colorDefault = new pc.Color(i3357[10], i3357[11], i3357[12], i3357[13])
  i3356.colorSelected = new pc.Color(i3357[14], i3357[15], i3357[16], i3357[17])
  return i3356
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i3358 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i3359 = data
  request.r(i3359[0], i3359[1], 0, i3358, 'nameLabel')
  request.r(i3359[2], i3359[3], 0, i3358, 'valueToggle')
  request.r(i3359[4], i3359[5], 0, i3358, 'fieldX')
  request.r(i3359[6], i3359[7], 0, i3358, 'fieldY')
  request.r(i3359[8], i3359[9], 0, i3358, 'fieldZ')
  request.r(i3359[10], i3359[11], 0, i3358, 'fieldW')
  i3358.colorDefault = new pc.Color(i3359[12], i3359[13], i3359[14], i3359[15])
  i3358.colorSelected = new pc.Color(i3359[16], i3359[17], i3359[18], i3359[19])
  return i3358
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i3360 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i3361 = data
  i3360.colorDefault = new pc.Color(i3361[0], i3361[1], i3361[2], i3361[3])
  i3360.colorSelected = new pc.Color(i3361[4], i3361[5], i3361[6], i3361[7])
  return i3360
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i3362 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i3363 = data
  i3362.m_Spacing = i3363[0]
  i3362.m_ChildForceExpandWidth = !!i3363[1]
  i3362.m_ChildForceExpandHeight = !!i3363[2]
  i3362.m_ChildControlWidth = !!i3363[3]
  i3362.m_ChildControlHeight = !!i3363[4]
  i3362.m_ChildScaleWidth = !!i3363[5]
  i3362.m_ChildScaleHeight = !!i3363[6]
  i3362.m_ReverseArrangement = !!i3363[7]
  i3362.m_Padding = UnityEngine.RectOffset.FromPaddings(i3363[8], i3363[9], i3363[10], i3363[11])
  i3362.m_ChildAlignment = i3363[12]
  return i3362
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i3364 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i3365 = data
  i3364.colorDefault = new pc.Color(i3365[0], i3365[1], i3365[2], i3365[3])
  i3364.colorSelected = new pc.Color(i3365[4], i3365[5], i3365[6], i3365[7])
  return i3364
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i3366 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i3367 = data
  request.r(i3367[0], i3367[1], 0, i3366, 'nameLabel')
  request.r(i3367[2], i3367[3], 0, i3366, 'header')
  i3366.colorDefault = new pc.Color(i3367[4], i3367[5], i3367[6], i3367[7])
  i3366.colorSelected = new pc.Color(i3367[8], i3367[9], i3367[10], i3367[11])
  return i3366
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i3368 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i3369 = data
  request.r(i3369[0], i3369[1], 0, i3368, 'nameLabel')
  request.r(i3369[2], i3369[3], 0, i3368, 'valueToggle')
  var i3371 = i3369[4]
  var i3370 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i3371.length; i += 2) {
  request.r(i3371[i + 0], i3371[i + 1], 1, i3370, '')
  }
  i3368.toggles = i3370
  i3368.colorDefault = new pc.Color(i3369[5], i3369[6], i3369[7], i3369[8])
  i3368.colorSelected = new pc.Color(i3369[9], i3369[10], i3369[11], i3369[12])
  return i3368
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i3374 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i3375 = data
  request.r(i3375[0], i3375[1], 0, i3374, 'nameLabel')
  request.r(i3375[2], i3375[3], 0, i3374, 'valueToggle')
  request.r(i3375[4], i3375[5], 0, i3374, 'checkmarkImage')
  i3374.colorDefault = new pc.Color(i3375[6], i3375[7], i3375[8], i3375[9])
  i3374.colorSelected = new pc.Color(i3375[10], i3375[11], i3375[12], i3375[13])
  return i3374
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i3376 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i3377 = data
  request.r(i3377[0], i3377[1], 0, i3376, 'nameLabel')
  request.r(i3377[2], i3377[3], 0, i3376, 'valueToggle')
  request.r(i3377[4], i3377[5], 0, i3376, 'checkmarkImage')
  i3376.colorDefault = new pc.Color(i3377[6], i3377[7], i3377[8], i3377[9])
  i3376.colorSelected = new pc.Color(i3377[10], i3377[11], i3377[12], i3377[13])
  return i3376
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i3378 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i3379 = data
  request.r(i3379[0], i3379[1], 0, i3378, 'nextButtonText')
  request.r(i3379[2], i3379[3], 0, i3378, 'previousButtonText')
  request.r(i3379[4], i3379[5], 0, i3378, 'nameLabel')
  request.r(i3379[6], i3379[7], 0, i3378, 'valueLabel')
  i3378.colorDefault = new pc.Color(i3379[8], i3379[9], i3379[10], i3379[11])
  i3378.colorSelected = new pc.Color(i3379[12], i3379[13], i3379[14], i3379[15])
  return i3378
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i3380 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i3381 = data
  request.r(i3381[0], i3381[1], 0, i3380, 'nameLabel')
  request.r(i3381[2], i3381[3], 0, i3380, 'valueToggle')
  i3380.colorDefault = new pc.Color(i3381[4], i3381[5], i3381[6], i3381[7])
  i3380.colorSelected = new pc.Color(i3381[8], i3381[9], i3381[10], i3381[11])
  return i3380
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i3382 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i3383 = data
  request.r(i3383[0], i3383[1], 0, i3382, 'nameLabel')
  i3382.colorDefault = new pc.Color(i3383[2], i3383[3], i3383[4], i3383[5])
  i3382.colorSelected = new pc.Color(i3383[6], i3383[7], i3383[8], i3383[9])
  return i3382
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i3384 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i3385 = data
  request.r(i3385[0], i3385[1], 0, i3384, 'nameLabel')
  request.r(i3385[2], i3385[3], 0, i3384, 'valueLabel')
  request.r(i3385[4], i3385[5], 0, i3384, 'progressBarRect')
  i3384.colorDefault = new pc.Color(i3385[6], i3385[7], i3385[8], i3385[9])
  i3384.colorSelected = new pc.Color(i3385[10], i3385[11], i3385[12], i3385[13])
  return i3384
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i3386 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i3387 = data
  request.r(i3387[0], i3387[1], 0, i3386, 'nameLabel')
  request.r(i3387[2], i3387[3], 0, i3386, 'valueLabel')
  i3386.colorDefault = new pc.Color(i3387[4], i3387[5], i3387[6], i3387[7])
  i3386.colorSelected = new pc.Color(i3387[8], i3387[9], i3387[10], i3387[11])
  return i3386
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i3388 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i3389 = data
  request.r(i3389[0], i3389[1], 0, i3388, 'nameLabel')
  request.r(i3389[2], i3389[3], 0, i3388, 'valueLabel')
  i3388.colorDefault = new pc.Color(i3389[4], i3389[5], i3389[6], i3389[7])
  i3388.colorSelected = new pc.Color(i3389[8], i3389[9], i3389[10], i3389[11])
  return i3388
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i3390 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i3391 = data
  request.r(i3391[0], i3391[1], 0, i3390, 'nextButtonText')
  request.r(i3391[2], i3391[3], 0, i3390, 'previousButtonText')
  request.r(i3391[4], i3391[5], 0, i3390, 'nameLabel')
  request.r(i3391[6], i3391[7], 0, i3390, 'valueLabel')
  i3390.colorDefault = new pc.Color(i3391[8], i3391[9], i3391[10], i3391[11])
  i3390.colorSelected = new pc.Color(i3391[12], i3391[13], i3391[14], i3391[15])
  return i3390
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i3392 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i3393 = data
  request.r(i3393[0], i3393[1], 0, i3392, 'nextButtonText')
  request.r(i3393[2], i3393[3], 0, i3392, 'previousButtonText')
  request.r(i3393[4], i3393[5], 0, i3392, 'nameLabel')
  request.r(i3393[6], i3393[7], 0, i3392, 'valueLabel')
  i3392.colorDefault = new pc.Color(i3393[8], i3393[9], i3393[10], i3393[11])
  i3392.colorSelected = new pc.Color(i3393[12], i3393[13], i3393[14], i3393[15])
  return i3392
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i3394 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i3395 = data
  request.r(i3395[0], i3395[1], 0, i3394, 'panel')
  request.r(i3395[2], i3395[3], 0, i3394, 'valuePrefab')
  return i3394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i3396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i3397 = data
  i3396.AdditionalLightsPerObjectLimit = i3397[0]
  i3396.AdditionalLightsRenderingMode = i3397[1]
  i3396.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i3397[2], i3396.LightRenderingMode)
  i3396.ColorGradingLutSize = i3397[3]
  i3396.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i3397[4], i3396.ColorGradingMode)
  i3396.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i3397[5], i3396.MainLightRenderingMode)
  i3396.MainLightRenderingModeValue = i3397[6]
  i3396.SupportsMainLightShadows = !!i3397[7]
  i3396.MixedLightingSupported = !!i3397[8]
  i3396.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i3397[9], i3396.MsaaQuality)
  i3396.MSAA = i3397[10]
  i3396.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i3397[11], i3396.OpaqueDownsampling)
  i3396.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i3397[12], i3396.MainLightShadowmapResolution)
  i3396.MainLightShadowmapResolutionValue = i3397[13]
  i3396.SupportsSoftShadows = !!i3397[14]
  i3396.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i3397[15], i3396.SoftShadowQuality)
  i3396.SoftShadowQualityValue = i3397[16]
  i3396.ShadowDistance = i3397[17]
  i3396.ShadowCascadeCount = i3397[18]
  i3396.Cascade2Split = i3397[19]
  i3396.Cascade3Split = new pc.Vec2( i3397[20], i3397[21] )
  i3396.Cascade4Split = new pc.Vec3( i3397[22], i3397[23], i3397[24] )
  i3396.CascadeBorder = i3397[25]
  i3396.ShadowDepthBias = i3397[26]
  i3396.ShadowNormalBias = i3397[27]
  i3396.RenderScale = i3397[28]
  i3396.RequireDepthTexture = !!i3397[29]
  i3396.RequireOpaqueTexture = !!i3397[30]
  i3396.SupportsHDR = !!i3397[31]
  i3396.SupportsTerrainHoles = !!i3397[32]
  return i3396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i3398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i3399 = data
  i3398.Disabled = i3399[0]
  i3398.PerVertex = i3399[1]
  i3398.PerPixel = i3399[2]
  return i3398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i3400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i3401 = data
  i3400.LowDynamicRange = i3401[0]
  i3400.HighDynamicRange = i3401[1]
  return i3400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i3402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i3403 = data
  i3402.Disabled = i3403[0]
  i3402._2x = i3403[1]
  i3402._4x = i3403[2]
  i3402._8x = i3403[3]
  return i3402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i3404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i3405 = data
  i3404.None = i3405[0]
  i3404._2xBilinear = i3405[1]
  i3404._4xBox = i3405[2]
  i3404._4xBilinear = i3405[3]
  return i3404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i3406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i3407 = data
  i3406._256 = i3407[0]
  i3406._512 = i3407[1]
  i3406._1024 = i3407[2]
  i3406._2048 = i3407[3]
  i3406._4096 = i3407[4]
  return i3406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i3408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i3409 = data
  i3408.UsePipelineSettings = i3409[0]
  i3408.Low = i3409[1]
  i3408.Medium = i3409[2]
  i3408.High = i3409[3]
  return i3408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3411 = data
  var i3413 = i3411[0]
  var i3412 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3413.length; i += 1) {
    i3412.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3413[i + 0]));
  }
  i3410.ShaderCompilationErrors = i3412
  i3410.name = i3411[1]
  i3410.guid = i3411[2]
  var i3415 = i3411[3]
  var i3414 = []
  for(var i = 0; i < i3415.length; i += 1) {
    i3414.push( i3415[i + 0] );
  }
  i3410.shaderDefinedKeywords = i3414
  var i3417 = i3411[4]
  var i3416 = []
  for(var i = 0; i < i3417.length; i += 1) {
    i3416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3417[i + 0]) );
  }
  i3410.passes = i3416
  var i3419 = i3411[5]
  var i3418 = []
  for(var i = 0; i < i3419.length; i += 1) {
    i3418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3419[i + 0]) );
  }
  i3410.usePasses = i3418
  var i3421 = i3411[6]
  var i3420 = []
  for(var i = 0; i < i3421.length; i += 1) {
    i3420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3421[i + 0]) );
  }
  i3410.defaultParameterValues = i3420
  request.r(i3411[7], i3411[8], 0, i3410, 'unityFallbackShader')
  i3410.readDepth = !!i3411[9]
  i3410.isCreatedByShaderGraph = !!i3411[10]
  i3410.compiled = !!i3411[11]
  return i3410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3425 = data
  i3424.shaderName = i3425[0]
  i3424.errorMessage = i3425[1]
  return i3424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3430 = root || new pc.UnityShaderPass()
  var i3431 = data
  i3430.id = i3431[0]
  i3430.subShaderIndex = i3431[1]
  i3430.name = i3431[2]
  i3430.passType = i3431[3]
  i3430.grabPassTextureName = i3431[4]
  i3430.usePass = !!i3431[5]
  i3430.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3431[6], i3430.zTest)
  i3430.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3431[7], i3430.zWrite)
  i3430.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3431[8], i3430.culling)
  i3430.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3431[9], i3430.blending)
  i3430.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3431[10], i3430.alphaBlending)
  i3430.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3431[11], i3430.colorWriteMask)
  i3430.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3431[12], i3430.offsetUnits)
  i3430.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3431[13], i3430.offsetFactor)
  i3430.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3431[14], i3430.stencilRef)
  i3430.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3431[15], i3430.stencilReadMask)
  i3430.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3431[16], i3430.stencilWriteMask)
  i3430.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3431[17], i3430.stencilOp)
  i3430.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3431[18], i3430.stencilOpFront)
  i3430.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3431[19], i3430.stencilOpBack)
  var i3433 = i3431[20]
  var i3432 = []
  for(var i = 0; i < i3433.length; i += 1) {
    i3432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3433[i + 0]) );
  }
  i3430.tags = i3432
  var i3435 = i3431[21]
  var i3434 = []
  for(var i = 0; i < i3435.length; i += 1) {
    i3434.push( i3435[i + 0] );
  }
  i3430.passDefinedKeywords = i3434
  var i3437 = i3431[22]
  var i3436 = []
  for(var i = 0; i < i3437.length; i += 1) {
    i3436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3437[i + 0]) );
  }
  i3430.passDefinedKeywordGroups = i3436
  var i3439 = i3431[23]
  var i3438 = []
  for(var i = 0; i < i3439.length; i += 1) {
    i3438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3439[i + 0]) );
  }
  i3430.variants = i3438
  var i3441 = i3431[24]
  var i3440 = []
  for(var i = 0; i < i3441.length; i += 1) {
    i3440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3441[i + 0]) );
  }
  i3430.excludedVariants = i3440
  i3430.hasDepthReader = !!i3431[25]
  return i3430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3443 = data
  i3442.val = i3443[0]
  i3442.name = i3443[1]
  return i3442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3445 = data
  i3444.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3445[0], i3444.src)
  i3444.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3445[1], i3444.dst)
  i3444.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3445[2], i3444.op)
  return i3444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3447 = data
  i3446.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3447[0], i3446.pass)
  i3446.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3447[1], i3446.fail)
  i3446.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3447[2], i3446.zFail)
  i3446.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3447[3], i3446.comp)
  return i3446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3451 = data
  i3450.name = i3451[0]
  i3450.value = i3451[1]
  return i3450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3455 = data
  var i3457 = i3455[0]
  var i3456 = []
  for(var i = 0; i < i3457.length; i += 1) {
    i3456.push( i3457[i + 0] );
  }
  i3454.keywords = i3456
  i3454.hasDiscard = !!i3455[1]
  return i3454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3461 = data
  i3460.passId = i3461[0]
  i3460.subShaderIndex = i3461[1]
  var i3463 = i3461[2]
  var i3462 = []
  for(var i = 0; i < i3463.length; i += 1) {
    i3462.push( i3463[i + 0] );
  }
  i3460.keywords = i3462
  i3460.vertexProgram = i3461[3]
  i3460.fragmentProgram = i3461[4]
  i3460.exportedForWebGl2 = !!i3461[5]
  i3460.readDepth = !!i3461[6]
  return i3460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3467 = data
  request.r(i3467[0], i3467[1], 0, i3466, 'shader')
  i3466.pass = i3467[2]
  return i3466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3471 = data
  i3470.name = i3471[0]
  i3470.type = i3471[1]
  i3470.value = new pc.Vec4( i3471[2], i3471[3], i3471[4], i3471[5] )
  i3470.textureValue = i3471[6]
  i3470.shaderPropertyFlag = i3471[7]
  return i3470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3473 = data
  i3472.name = i3473[0]
  request.r(i3473[1], i3473[2], 0, i3472, 'texture')
  i3472.aabb = i3473[3]
  i3472.vertices = i3473[4]
  i3472.triangles = i3473[5]
  i3472.textureRect = UnityEngine.Rect.MinMaxRect(i3473[6], i3473[7], i3473[8], i3473[9])
  i3472.packedRect = UnityEngine.Rect.MinMaxRect(i3473[10], i3473[11], i3473[12], i3473[13])
  i3472.border = new pc.Vec4( i3473[14], i3473[15], i3473[16], i3473[17] )
  i3472.transparency = i3473[18]
  i3472.bounds = i3473[19]
  i3472.pixelsPerUnit = i3473[20]
  i3472.textureWidth = i3473[21]
  i3472.textureHeight = i3473[22]
  i3472.nativeSize = new pc.Vec2( i3473[23], i3473[24] )
  i3472.pivot = new pc.Vec2( i3473[25], i3473[26] )
  i3472.textureRectOffset = new pc.Vec2( i3473[27], i3473[28] )
  return i3472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3475 = data
  i3474.name = i3475[0]
  i3474.ascent = i3475[1]
  i3474.originalLineHeight = i3475[2]
  i3474.fontSize = i3475[3]
  var i3477 = i3475[4]
  var i3476 = []
  for(var i = 0; i < i3477.length; i += 1) {
    i3476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3477[i + 0]) );
  }
  i3474.characterInfo = i3476
  request.r(i3475[5], i3475[6], 0, i3474, 'texture')
  i3474.originalFontSize = i3475[7]
  return i3474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3481 = data
  i3480.index = i3481[0]
  i3480.advance = i3481[1]
  i3480.bearing = i3481[2]
  i3480.glyphWidth = i3481[3]
  i3480.glyphHeight = i3481[4]
  i3480.minX = i3481[5]
  i3480.maxX = i3481[6]
  i3480.minY = i3481[7]
  i3480.maxY = i3481[8]
  i3480.uvBottomLeftX = i3481[9]
  i3480.uvBottomLeftY = i3481[10]
  i3480.uvBottomRightX = i3481[11]
  i3480.uvBottomRightY = i3481[12]
  i3480.uvTopLeftX = i3481[13]
  i3480.uvTopLeftY = i3481[14]
  i3480.uvTopRightX = i3481[15]
  i3480.uvTopRightY = i3481[16]
  return i3480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3483 = data
  i3482.name = i3483[0]
  i3482.bytes64 = i3483[1]
  i3482.data = i3483[2]
  return i3482
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3484 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3485 = data
  i3484.hashCode = i3485[0]
  request.r(i3485[1], i3485[2], 0, i3484, 'material')
  i3484.materialHashCode = i3485[3]
  request.r(i3485[4], i3485[5], 0, i3484, 'atlas')
  i3484.normalStyle = i3485[6]
  i3484.normalSpacingOffset = i3485[7]
  i3484.boldStyle = i3485[8]
  i3484.boldSpacing = i3485[9]
  i3484.italicStyle = i3485[10]
  i3484.tabSize = i3485[11]
  i3484.m_Version = i3485[12]
  i3484.m_SourceFontFileGUID = i3485[13]
  request.r(i3485[14], i3485[15], 0, i3484, 'm_SourceFontFile_EditorRef')
  request.r(i3485[16], i3485[17], 0, i3484, 'm_SourceFontFile')
  i3484.m_AtlasPopulationMode = i3485[18]
  i3484.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3485[19], i3484.m_FaceInfo)
  var i3487 = i3485[20]
  var i3486 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3487.length; i += 1) {
    i3486.add(request.d('UnityEngine.TextCore.Glyph', i3487[i + 0]));
  }
  i3484.m_GlyphTable = i3486
  var i3489 = i3485[21]
  var i3488 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3489.length; i += 1) {
    i3488.add(request.d('TMPro.TMP_Character', i3489[i + 0]));
  }
  i3484.m_CharacterTable = i3488
  var i3491 = i3485[22]
  var i3490 = []
  for(var i = 0; i < i3491.length; i += 2) {
  request.r(i3491[i + 0], i3491[i + 1], 2, i3490, '')
  }
  i3484.m_AtlasTextures = i3490
  i3484.m_AtlasTextureIndex = i3485[23]
  i3484.m_IsMultiAtlasTexturesEnabled = !!i3485[24]
  i3484.m_ClearDynamicDataOnBuild = !!i3485[25]
  var i3493 = i3485[26]
  var i3492 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3493.length; i += 1) {
    i3492.add(request.d('UnityEngine.TextCore.GlyphRect', i3493[i + 0]));
  }
  i3484.m_UsedGlyphRects = i3492
  var i3495 = i3485[27]
  var i3494 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3495.length; i += 1) {
    i3494.add(request.d('UnityEngine.TextCore.GlyphRect', i3495[i + 0]));
  }
  i3484.m_FreeGlyphRects = i3494
  i3484.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3485[28], i3484.m_fontInfo)
  i3484.m_AtlasWidth = i3485[29]
  i3484.m_AtlasHeight = i3485[30]
  i3484.m_AtlasPadding = i3485[31]
  i3484.m_AtlasRenderMode = i3485[32]
  var i3497 = i3485[33]
  var i3496 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3497.length; i += 1) {
    i3496.add(request.d('TMPro.TMP_Glyph', i3497[i + 0]));
  }
  i3484.m_glyphInfoList = i3496
  i3484.m_KerningTable = request.d('TMPro.KerningTable', i3485[34], i3484.m_KerningTable)
  i3484.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3485[35], i3484.m_FontFeatureTable)
  var i3499 = i3485[36]
  var i3498 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3499.length; i += 2) {
  request.r(i3499[i + 0], i3499[i + 1], 1, i3498, '')
  }
  i3484.fallbackFontAssets = i3498
  var i3501 = i3485[37]
  var i3500 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3501.length; i += 2) {
  request.r(i3501[i + 0], i3501[i + 1], 1, i3500, '')
  }
  i3484.m_FallbackFontAssetTable = i3500
  i3484.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3485[38], i3484.m_CreationSettings)
  var i3503 = i3485[39]
  var i3502 = []
  for(var i = 0; i < i3503.length; i += 1) {
    i3502.push( request.d('TMPro.TMP_FontWeightPair', i3503[i + 0]) );
  }
  i3484.m_FontWeightTable = i3502
  var i3505 = i3485[40]
  var i3504 = []
  for(var i = 0; i < i3505.length; i += 1) {
    i3504.push( request.d('TMPro.TMP_FontWeightPair', i3505[i + 0]) );
  }
  i3484.fontWeights = i3504
  return i3484
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3506 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3507 = data
  i3506.m_FaceIndex = i3507[0]
  i3506.m_FamilyName = i3507[1]
  i3506.m_StyleName = i3507[2]
  i3506.m_PointSize = i3507[3]
  i3506.m_Scale = i3507[4]
  i3506.m_UnitsPerEM = i3507[5]
  i3506.m_LineHeight = i3507[6]
  i3506.m_AscentLine = i3507[7]
  i3506.m_CapLine = i3507[8]
  i3506.m_MeanLine = i3507[9]
  i3506.m_Baseline = i3507[10]
  i3506.m_DescentLine = i3507[11]
  i3506.m_SuperscriptOffset = i3507[12]
  i3506.m_SuperscriptSize = i3507[13]
  i3506.m_SubscriptOffset = i3507[14]
  i3506.m_SubscriptSize = i3507[15]
  i3506.m_UnderlineOffset = i3507[16]
  i3506.m_UnderlineThickness = i3507[17]
  i3506.m_StrikethroughOffset = i3507[18]
  i3506.m_StrikethroughThickness = i3507[19]
  i3506.m_TabWidth = i3507[20]
  return i3506
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3510 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3511 = data
  i3510.m_Index = i3511[0]
  i3510.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3511[1], i3510.m_Metrics)
  i3510.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3511[2], i3510.m_GlyphRect)
  i3510.m_Scale = i3511[3]
  i3510.m_AtlasIndex = i3511[4]
  i3510.m_ClassDefinitionType = i3511[5]
  return i3510
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3512 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3513 = data
  i3512.m_Width = i3513[0]
  i3512.m_Height = i3513[1]
  i3512.m_HorizontalBearingX = i3513[2]
  i3512.m_HorizontalBearingY = i3513[3]
  i3512.m_HorizontalAdvance = i3513[4]
  return i3512
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3514 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3515 = data
  i3514.m_X = i3515[0]
  i3514.m_Y = i3515[1]
  i3514.m_Width = i3515[2]
  i3514.m_Height = i3515[3]
  return i3514
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3518 = root || request.c( 'TMPro.TMP_Character' )
  var i3519 = data
  i3518.m_ElementType = i3519[0]
  i3518.m_Unicode = i3519[1]
  i3518.m_GlyphIndex = i3519[2]
  i3518.m_Scale = i3519[3]
  return i3518
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3524 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3525 = data
  i3524.Name = i3525[0]
  i3524.PointSize = i3525[1]
  i3524.Scale = i3525[2]
  i3524.CharacterCount = i3525[3]
  i3524.LineHeight = i3525[4]
  i3524.Baseline = i3525[5]
  i3524.Ascender = i3525[6]
  i3524.CapHeight = i3525[7]
  i3524.Descender = i3525[8]
  i3524.CenterLine = i3525[9]
  i3524.SuperscriptOffset = i3525[10]
  i3524.SubscriptOffset = i3525[11]
  i3524.SubSize = i3525[12]
  i3524.Underline = i3525[13]
  i3524.UnderlineThickness = i3525[14]
  i3524.strikethrough = i3525[15]
  i3524.strikethroughThickness = i3525[16]
  i3524.TabWidth = i3525[17]
  i3524.Padding = i3525[18]
  i3524.AtlasWidth = i3525[19]
  i3524.AtlasHeight = i3525[20]
  return i3524
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3528 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3529 = data
  i3528.id = i3529[0]
  i3528.x = i3529[1]
  i3528.y = i3529[2]
  i3528.width = i3529[3]
  i3528.height = i3529[4]
  i3528.xOffset = i3529[5]
  i3528.yOffset = i3529[6]
  i3528.xAdvance = i3529[7]
  i3528.scale = i3529[8]
  return i3528
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3530 = root || request.c( 'TMPro.KerningTable' )
  var i3531 = data
  var i3533 = i3531[0]
  var i3532 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3533.length; i += 1) {
    i3532.add(request.d('TMPro.KerningPair', i3533[i + 0]));
  }
  i3530.kerningPairs = i3532
  return i3530
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3536 = root || request.c( 'TMPro.KerningPair' )
  var i3537 = data
  i3536.xOffset = i3537[0]
  i3536.m_FirstGlyph = i3537[1]
  i3536.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3537[2], i3536.m_FirstGlyphAdjustments)
  i3536.m_SecondGlyph = i3537[3]
  i3536.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3537[4], i3536.m_SecondGlyphAdjustments)
  i3536.m_IgnoreSpacingAdjustments = !!i3537[5]
  return i3536
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3538 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3539 = data
  var i3541 = i3539[0]
  var i3540 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3541.length; i += 1) {
    i3540.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3541[i + 0]));
  }
  i3538.m_GlyphPairAdjustmentRecords = i3540
  return i3538
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3544 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3545 = data
  i3544.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3545[0], i3544.m_FirstAdjustmentRecord)
  i3544.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3545[1], i3544.m_SecondAdjustmentRecord)
  i3544.m_FeatureLookupFlags = i3545[2]
  return i3544
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3546 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3547 = data
  i3546.m_GlyphIndex = i3547[0]
  i3546.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3547[1], i3546.m_GlyphValueRecord)
  return i3546
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3548 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3549 = data
  i3548.m_XPlacement = i3549[0]
  i3548.m_YPlacement = i3549[1]
  i3548.m_XAdvance = i3549[2]
  i3548.m_YAdvance = i3549[3]
  return i3548
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3552 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3553 = data
  i3552.sourceFontFileName = i3553[0]
  i3552.sourceFontFileGUID = i3553[1]
  i3552.pointSizeSamplingMode = i3553[2]
  i3552.pointSize = i3553[3]
  i3552.padding = i3553[4]
  i3552.packingMode = i3553[5]
  i3552.atlasWidth = i3553[6]
  i3552.atlasHeight = i3553[7]
  i3552.characterSetSelectionMode = i3553[8]
  i3552.characterSequence = i3553[9]
  i3552.referencedFontAssetGUID = i3553[10]
  i3552.referencedTextAssetGUID = i3553[11]
  i3552.fontStyle = i3553[12]
  i3552.fontStyleModifier = i3553[13]
  i3552.renderMode = i3553[14]
  i3552.includeFontFeatures = !!i3553[15]
  return i3552
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3556 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3557 = data
  request.r(i3557[0], i3557[1], 0, i3556, 'regularTypeface')
  request.r(i3557[2], i3557[3], 0, i3556, 'italicTypeface')
  return i3556
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i3558 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i3559 = data
  var i3561 = i3559[0]
  var i3560 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i3561.length; i += 2) {
  request.r(i3561[i + 0], i3561[i + 1], 1, i3560, '')
  }
  i3558.components = i3560
  return i3558
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i3564 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i3565 = data
  i3564.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i3565[0], i3564.mode)
  i3564.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i3565[1], i3564.neutralHDRRangeReductionMode)
  i3564.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i3565[2], i3564.acesPreset)
  i3564.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3565[3], i3564.hueShiftAmount)
  i3564.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i3565[4], i3564.detectPaperWhite)
  i3564.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3565[5], i3564.paperWhite)
  i3564.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i3565[6], i3564.detectBrightnessLimits)
  i3564.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3565[7], i3564.minNits)
  i3564.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3565[8], i3564.maxNits)
  i3564.active = !!i3565[9]
  return i3564
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i3566 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i3567 = data
  i3566.m_Value = i3567[0]
  i3566.m_OverrideState = !!i3567[1]
  return i3566
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i3568 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i3569 = data
  i3568.m_Value = i3569[0]
  i3568.m_OverrideState = !!i3569[1]
  return i3568
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i3570 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i3571 = data
  i3570.m_Value = i3571[0]
  i3570.m_OverrideState = !!i3571[1]
  return i3570
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i3572 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i3573 = data
  i3572.m_Value = i3573[0]
  i3572.m_OverrideState = !!i3573[1]
  return i3572
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i3574 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i3575 = data
  i3574.m_Value = !!i3575[0]
  i3574.m_OverrideState = !!i3575[1]
  return i3574
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i3576 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i3577 = data
  i3576.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i3577[0], i3576.skipIterations)
  i3576.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i3577[1], i3576.threshold)
  i3576.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i3577[2], i3576.intensity)
  i3576.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3577[3], i3576.scatter)
  i3576.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i3577[4], i3576.clamp)
  i3576.tint = request.d('UnityEngine.Rendering.ColorParameter', i3577[5], i3576.tint)
  i3576.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i3577[6], i3576.highQualityFiltering)
  i3576.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i3577[7], i3576.downscale)
  i3576.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i3577[8], i3576.maxIterations)
  i3576.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i3577[9], i3576.dirtTexture)
  i3576.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i3577[10], i3576.dirtIntensity)
  i3576.active = !!i3577[11]
  return i3576
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i3578 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i3579 = data
  i3578.m_Value = i3579[0]
  i3578.m_OverrideState = !!i3579[1]
  return i3578
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i3580 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i3581 = data
  i3580.m_Value = i3581[0]
  i3580.m_OverrideState = !!i3581[1]
  return i3580
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i3582 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i3583 = data
  i3582.m_Value = new pc.Color(i3583[0], i3583[1], i3583[2], i3583[3])
  i3582.m_OverrideState = !!i3583[4]
  return i3582
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i3584 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i3585 = data
  i3584.m_Value = i3585[0]
  i3584.m_OverrideState = !!i3585[1]
  return i3584
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i3586 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i3587 = data
  i3586.dimension = i3587[0]
  request.r(i3587[1], i3587[2], 0, i3586, 'm_Value')
  i3586.m_OverrideState = !!i3587[3]
  return i3586
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i3588 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i3589 = data
  i3588.color = request.d('UnityEngine.Rendering.ColorParameter', i3589[0], i3588.color)
  i3588.center = request.d('UnityEngine.Rendering.Vector2Parameter', i3589[1], i3588.center)
  i3588.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3589[2], i3588.intensity)
  i3588.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3589[3], i3588.smoothness)
  i3588.rounded = request.d('UnityEngine.Rendering.BoolParameter', i3589[4], i3588.rounded)
  i3588.active = !!i3589[5]
  return i3588
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i3590 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i3591 = data
  i3590.m_Value = new pc.Vec2( i3591[0], i3591[1] )
  i3590.m_OverrideState = !!i3591[2]
  return i3590
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3592 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3593 = data
  i3592.useSafeMode = !!i3593[0]
  i3592.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3593[1], i3592.safeModeOptions)
  i3592.timeScale = i3593[2]
  i3592.unscaledTimeScale = i3593[3]
  i3592.useSmoothDeltaTime = !!i3593[4]
  i3592.maxSmoothUnscaledTime = i3593[5]
  i3592.rewindCallbackMode = i3593[6]
  i3592.showUnityEditorReport = !!i3593[7]
  i3592.logBehaviour = i3593[8]
  i3592.drawGizmos = !!i3593[9]
  i3592.defaultRecyclable = !!i3593[10]
  i3592.defaultAutoPlay = i3593[11]
  i3592.defaultUpdateType = i3593[12]
  i3592.defaultTimeScaleIndependent = !!i3593[13]
  i3592.defaultEaseType = i3593[14]
  i3592.defaultEaseOvershootOrAmplitude = i3593[15]
  i3592.defaultEasePeriod = i3593[16]
  i3592.defaultAutoKill = !!i3593[17]
  i3592.defaultLoopType = i3593[18]
  i3592.debugMode = !!i3593[19]
  i3592.debugStoreTargetId = !!i3593[20]
  i3592.showPreviewPanel = !!i3593[21]
  i3592.storeSettingsLocation = i3593[22]
  i3592.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3593[23], i3592.modules)
  i3592.createASMDEF = !!i3593[24]
  i3592.showPlayingTweens = !!i3593[25]
  i3592.showPausedTweens = !!i3593[26]
  return i3592
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3594 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3595 = data
  i3594.logBehaviour = i3595[0]
  i3594.nestedTweenFailureBehaviour = i3595[1]
  return i3594
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3596 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3597 = data
  i3596.showPanel = !!i3597[0]
  i3596.audioEnabled = !!i3597[1]
  i3596.physicsEnabled = !!i3597[2]
  i3596.physics2DEnabled = !!i3597[3]
  i3596.spriteEnabled = !!i3597[4]
  i3596.uiEnabled = !!i3597[5]
  i3596.textMeshProEnabled = !!i3597[6]
  i3596.tk2DEnabled = !!i3597[7]
  i3596.deAudioEnabled = !!i3597[8]
  i3596.deUnityExtendedEnabled = !!i3597[9]
  i3596.epoOutlineEnabled = !!i3597[10]
  return i3596
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3598 = root || request.c( 'TMPro.TMP_Settings' )
  var i3599 = data
  i3598.m_enableWordWrapping = !!i3599[0]
  i3598.m_enableKerning = !!i3599[1]
  i3598.m_enableExtraPadding = !!i3599[2]
  i3598.m_enableTintAllSprites = !!i3599[3]
  i3598.m_enableParseEscapeCharacters = !!i3599[4]
  i3598.m_EnableRaycastTarget = !!i3599[5]
  i3598.m_GetFontFeaturesAtRuntime = !!i3599[6]
  i3598.m_missingGlyphCharacter = i3599[7]
  i3598.m_warningsDisabled = !!i3599[8]
  request.r(i3599[9], i3599[10], 0, i3598, 'm_defaultFontAsset')
  i3598.m_defaultFontAssetPath = i3599[11]
  i3598.m_defaultFontSize = i3599[12]
  i3598.m_defaultAutoSizeMinRatio = i3599[13]
  i3598.m_defaultAutoSizeMaxRatio = i3599[14]
  i3598.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3599[15], i3599[16] )
  i3598.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3599[17], i3599[18] )
  i3598.m_autoSizeTextContainer = !!i3599[19]
  i3598.m_IsTextObjectScaleStatic = !!i3599[20]
  var i3601 = i3599[21]
  var i3600 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3601.length; i += 2) {
  request.r(i3601[i + 0], i3601[i + 1], 1, i3600, '')
  }
  i3598.m_fallbackFontAssets = i3600
  i3598.m_matchMaterialPreset = !!i3599[22]
  request.r(i3599[23], i3599[24], 0, i3598, 'm_defaultSpriteAsset')
  i3598.m_defaultSpriteAssetPath = i3599[25]
  i3598.m_enableEmojiSupport = !!i3599[26]
  i3598.m_MissingCharacterSpriteUnicode = i3599[27]
  i3598.m_defaultColorGradientPresetsPath = i3599[28]
  request.r(i3599[29], i3599[30], 0, i3598, 'm_defaultStyleSheet')
  i3598.m_StyleSheetsResourcePath = i3599[31]
  request.r(i3599[32], i3599[33], 0, i3598, 'm_leadingCharacters')
  request.r(i3599[34], i3599[35], 0, i3598, 'm_followingCharacters')
  i3598.m_UseModernHangulLineBreakingRules = !!i3599[36]
  return i3598
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3602 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3603 = data
  i3602.hashCode = i3603[0]
  request.r(i3603[1], i3603[2], 0, i3602, 'material')
  i3602.materialHashCode = i3603[3]
  request.r(i3603[4], i3603[5], 0, i3602, 'spriteSheet')
  var i3605 = i3603[6]
  var i3604 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3605.length; i += 1) {
    i3604.add(request.d('TMPro.TMP_Sprite', i3605[i + 0]));
  }
  i3602.spriteInfoList = i3604
  var i3607 = i3603[7]
  var i3606 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3607.length; i += 2) {
  request.r(i3607[i + 0], i3607[i + 1], 1, i3606, '')
  }
  i3602.fallbackSpriteAssets = i3606
  i3602.m_Version = i3603[8]
  i3602.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3603[9], i3602.m_FaceInfo)
  var i3609 = i3603[10]
  var i3608 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3609.length; i += 1) {
    i3608.add(request.d('TMPro.TMP_SpriteCharacter', i3609[i + 0]));
  }
  i3602.m_SpriteCharacterTable = i3608
  var i3611 = i3603[11]
  var i3610 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3611.length; i += 1) {
    i3610.add(request.d('TMPro.TMP_SpriteGlyph', i3611[i + 0]));
  }
  i3602.m_SpriteGlyphTable = i3610
  return i3602
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3614 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3615 = data
  i3614.name = i3615[0]
  i3614.hashCode = i3615[1]
  i3614.unicode = i3615[2]
  i3614.pivot = new pc.Vec2( i3615[3], i3615[4] )
  request.r(i3615[5], i3615[6], 0, i3614, 'sprite')
  i3614.id = i3615[7]
  i3614.x = i3615[8]
  i3614.y = i3615[9]
  i3614.width = i3615[10]
  i3614.height = i3615[11]
  i3614.xOffset = i3615[12]
  i3614.yOffset = i3615[13]
  i3614.xAdvance = i3615[14]
  i3614.scale = i3615[15]
  return i3614
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3620 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3621 = data
  i3620.m_Name = i3621[0]
  i3620.m_HashCode = i3621[1]
  i3620.m_ElementType = i3621[2]
  i3620.m_Unicode = i3621[3]
  i3620.m_GlyphIndex = i3621[4]
  i3620.m_Scale = i3621[5]
  return i3620
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3624 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3625 = data
  request.r(i3625[0], i3625[1], 0, i3624, 'sprite')
  i3624.m_Index = i3625[2]
  i3624.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3625[3], i3624.m_Metrics)
  i3624.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3625[4], i3624.m_GlyphRect)
  i3624.m_Scale = i3625[5]
  i3624.m_AtlasIndex = i3625[6]
  i3624.m_ClassDefinitionType = i3625[7]
  return i3624
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3626 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3627 = data
  var i3629 = i3627[0]
  var i3628 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3629.length; i += 1) {
    i3628.add(request.d('TMPro.TMP_Style', i3629[i + 0]));
  }
  i3626.m_StyleList = i3628
  return i3626
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3632 = root || request.c( 'TMPro.TMP_Style' )
  var i3633 = data
  i3632.m_Name = i3633[0]
  i3632.m_HashCode = i3633[1]
  i3632.m_OpeningDefinition = i3633[2]
  i3632.m_ClosingDefinition = i3633[3]
  i3632.m_OpeningTagArray = i3633[4]
  i3632.m_ClosingTagArray = i3633[5]
  i3632.m_OpeningTagUnicodeArray = i3633[6]
  i3632.m_ClosingTagUnicodeArray = i3633[7]
  return i3632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3635 = data
  var i3637 = i3635[0]
  var i3636 = []
  for(var i = 0; i < i3637.length; i += 1) {
    i3636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3637[i + 0]) );
  }
  i3634.files = i3636
  i3634.componentToPrefabIds = i3635[1]
  return i3634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3641 = data
  i3640.path = i3641[0]
  request.r(i3641[1], i3641[2], 0, i3640, 'unityObject')
  return i3640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3643 = data
  var i3645 = i3643[0]
  var i3644 = []
  for(var i = 0; i < i3645.length; i += 1) {
    i3644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3645[i + 0]) );
  }
  i3642.scriptsExecutionOrder = i3644
  var i3647 = i3643[1]
  var i3646 = []
  for(var i = 0; i < i3647.length; i += 1) {
    i3646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3647[i + 0]) );
  }
  i3642.sortingLayers = i3646
  var i3649 = i3643[2]
  var i3648 = []
  for(var i = 0; i < i3649.length; i += 1) {
    i3648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3649[i + 0]) );
  }
  i3642.cullingLayers = i3648
  i3642.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3643[3], i3642.timeSettings)
  i3642.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3643[4], i3642.physicsSettings)
  i3642.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3643[5], i3642.physics2DSettings)
  i3642.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3643[6], i3642.qualitySettings)
  i3642.enableRealtimeShadows = !!i3643[7]
  i3642.enableAutoInstancing = !!i3643[8]
  i3642.enableDynamicBatching = !!i3643[9]
  i3642.lightmapEncodingQuality = i3643[10]
  i3642.desiredColorSpace = i3643[11]
  var i3651 = i3643[12]
  var i3650 = []
  for(var i = 0; i < i3651.length; i += 1) {
    i3650.push( i3651[i + 0] );
  }
  i3642.allTags = i3650
  return i3642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3655 = data
  i3654.name = i3655[0]
  i3654.value = i3655[1]
  return i3654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3659 = data
  i3658.id = i3659[0]
  i3658.name = i3659[1]
  i3658.value = i3659[2]
  return i3658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3663 = data
  i3662.id = i3663[0]
  i3662.name = i3663[1]
  return i3662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3665 = data
  i3664.fixedDeltaTime = i3665[0]
  i3664.maximumDeltaTime = i3665[1]
  i3664.timeScale = i3665[2]
  i3664.maximumParticleTimestep = i3665[3]
  return i3664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3667 = data
  i3666.gravity = new pc.Vec3( i3667[0], i3667[1], i3667[2] )
  i3666.defaultSolverIterations = i3667[3]
  i3666.bounceThreshold = i3667[4]
  i3666.autoSyncTransforms = !!i3667[5]
  i3666.autoSimulation = !!i3667[6]
  var i3669 = i3667[7]
  var i3668 = []
  for(var i = 0; i < i3669.length; i += 1) {
    i3668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3669[i + 0]) );
  }
  i3666.collisionMatrix = i3668
  return i3666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3673 = data
  i3672.enabled = !!i3673[0]
  i3672.layerId = i3673[1]
  i3672.otherLayerId = i3673[2]
  return i3672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3675 = data
  request.r(i3675[0], i3675[1], 0, i3674, 'material')
  i3674.gravity = new pc.Vec2( i3675[2], i3675[3] )
  i3674.positionIterations = i3675[4]
  i3674.velocityIterations = i3675[5]
  i3674.velocityThreshold = i3675[6]
  i3674.maxLinearCorrection = i3675[7]
  i3674.maxAngularCorrection = i3675[8]
  i3674.maxTranslationSpeed = i3675[9]
  i3674.maxRotationSpeed = i3675[10]
  i3674.baumgarteScale = i3675[11]
  i3674.baumgarteTOIScale = i3675[12]
  i3674.timeToSleep = i3675[13]
  i3674.linearSleepTolerance = i3675[14]
  i3674.angularSleepTolerance = i3675[15]
  i3674.defaultContactOffset = i3675[16]
  i3674.autoSimulation = !!i3675[17]
  i3674.queriesHitTriggers = !!i3675[18]
  i3674.queriesStartInColliders = !!i3675[19]
  i3674.callbacksOnDisable = !!i3675[20]
  i3674.reuseCollisionCallbacks = !!i3675[21]
  i3674.autoSyncTransforms = !!i3675[22]
  var i3677 = i3675[23]
  var i3676 = []
  for(var i = 0; i < i3677.length; i += 1) {
    i3676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3677[i + 0]) );
  }
  i3674.collisionMatrix = i3676
  return i3674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3681 = data
  i3680.enabled = !!i3681[0]
  i3680.layerId = i3681[1]
  i3680.otherLayerId = i3681[2]
  return i3680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3683 = data
  var i3685 = i3683[0]
  var i3684 = []
  for(var i = 0; i < i3685.length; i += 1) {
    i3684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3685[i + 0]) );
  }
  i3682.qualityLevels = i3684
  var i3687 = i3683[1]
  var i3686 = []
  for(var i = 0; i < i3687.length; i += 1) {
    i3686.push( i3687[i + 0] );
  }
  i3682.names = i3686
  i3682.shadows = i3683[2]
  i3682.anisotropicFiltering = i3683[3]
  i3682.antiAliasing = i3683[4]
  i3682.lodBias = i3683[5]
  i3682.shadowCascades = i3683[6]
  i3682.shadowDistance = i3683[7]
  i3682.shadowmaskMode = i3683[8]
  i3682.shadowProjection = i3683[9]
  i3682.shadowResolution = i3683[10]
  i3682.softParticles = !!i3683[11]
  i3682.softVegetation = !!i3683[12]
  i3682.activeColorSpace = i3683[13]
  i3682.desiredColorSpace = i3683[14]
  i3682.masterTextureLimit = i3683[15]
  i3682.maxQueuedFrames = i3683[16]
  i3682.particleRaycastBudget = i3683[17]
  i3682.pixelLightCount = i3683[18]
  i3682.realtimeReflectionProbes = !!i3683[19]
  i3682.shadowCascade2Split = i3683[20]
  i3682.shadowCascade4Split = new pc.Vec3( i3683[21], i3683[22], i3683[23] )
  i3682.streamingMipmapsActive = !!i3683[24]
  i3682.vSyncCount = i3683[25]
  i3682.asyncUploadBufferSize = i3683[26]
  i3682.asyncUploadTimeSlice = i3683[27]
  i3682.billboardsFaceCameraPosition = !!i3683[28]
  i3682.shadowNearPlaneOffset = i3683[29]
  i3682.streamingMipmapsMemoryBudget = i3683[30]
  i3682.maximumLODLevel = i3683[31]
  i3682.streamingMipmapsAddAllCameras = !!i3683[32]
  i3682.streamingMipmapsMaxLevelReduction = i3683[33]
  i3682.streamingMipmapsRenderersPerFrame = i3683[34]
  i3682.resolutionScalingFixedDPIFactor = i3683[35]
  i3682.streamingMipmapsMaxFileIORequests = i3683[36]
  i3682.currentQualityLevel = i3683[37]
  return i3682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3693 = data
  i3692.weight = i3693[0]
  i3692.vertices = i3693[1]
  i3692.normals = i3693[2]
  i3692.tangents = i3693[3]
  return i3692
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3694 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3695 = data
  i3694.xPlacement = i3695[0]
  i3694.yPlacement = i3695[1]
  i3694.xAdvance = i3695[2]
  i3694.yAdvance = i3695[3]
  return i3694
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"90":[91],"92":[91],"93":[91],"94":[91],"95":[91],"96":[91],"97":[98],"99":[19],"100":[101],"102":[101],"103":[101],"104":[101],"105":[101],"106":[101],"107":[101],"108":[109],"110":[109],"111":[109],"112":[109],"113":[109],"114":[109],"115":[109],"116":[109],"117":[109],"118":[109],"119":[109],"120":[109],"121":[109],"122":[19],"123":[3],"124":[125],"126":[125],"18":[10],"127":[11,128,10],"60":[10],"129":[19],"21":[19],"35":[34],"130":[131],"132":[10],"133":[10],"23":[18],"13":[11,10],"134":[10],"22":[18],"41":[10],"135":[10],"67":[10],"136":[10],"46":[10],"137":[10],"40":[10],"49":[10],"138":[10],"139":[11,10],"140":[10],"48":[10],"45":[10],"31":[10],"44":[11,10],"53":[10],"141":[36],"142":[36],"37":[36],"143":[36],"144":[19],"145":[19],"146":[131],"147":[10],"148":[3,10],"27":[10,11],"149":[10],"150":[11,10],"151":[3],"152":[11,10],"153":[10],"154":[131]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","Case","UnityEngine.Shader","UnityEngine.BoxCollider","Bottle","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Texture2D","PuzzleManager","UnityEngine.GameObject","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UIScaler","UnityEngine.UI.Button","ButtonPulse","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","TextHint","TimerSlider","UnityEngine.UI.Slider","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.Text","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.Font","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.Vignette","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Extensions.CasualGame.UIParticleSystem","UnityEngine.ParticleSystem","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.60f1";

Deserializers.productName = "Playable_Project";

Deserializers.lunaInitializationTime = "07/07/2025 19:41:10";

Deserializers.lunaDaysRunning = "0.9";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "hyeonsik0104-naver-com";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1764";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4091";

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

Deserializers.buildID = "f6ebf0ef-6aee-481a-94d4-36c1611ac522";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

