<template>
  <view class='line-wapper flex'>
    <view class='left-line-wapper flex-col'>
      <view class='left-line-item flex-center' v-for="(item, index) in lineDataA" :key="index" @tap="handleLeftTap(item, index)">
        {{ item.name }}
      </view>
    </view>

    <view class="all-line-item flex-col">
      <view class="line-item-box flex-center" v-for="(item, index) in lineData" :key="index">
        <view :class="['line-item-line', lineClass(item)]" v-show="item.showLine"></view>
      </view>
    </view>

    <view class='right-line-wapper'>
      <view class='right-line-item flex-center' v-for="(item, index) in lineDataB" :key="index" @tap="handleRightTap(item, index)">
        {{ item.name }}
      </view>
    </view>

  </view>
</template>

<script lang="ts" setup>
// 连线题数据
const lineDataA = ref([
    {
        name: 'A',
        active: false
    },
    {
        name: 'B',
        active: false
    },
    {
        name: 'B',
        active: false
    },
    {
        name: 'A',
        active: false
    }
])
const lineDataB = ref([
    {
        name: 'A',
        active: false
    },
    {
        name: 'B',
        active: false
    },
    {
        name: 'B',
        active: false
    },
    {
        name: 'A',
        active: false
    }
])

// 连线题数据
const lineData = ref([
  {
    left: 4,
    right: 1,
    showLine: true
  },
  {
    left: 4,
    right: 2,
    showLine: true
  },
  {
    left: 4,
    right: 3,
    showLine: true
  },
  {
    left: 4,
    right: 4,
    showLine: true
  },
])

// 当前点击的位置
const clicktPosition = ref('left')

// 左边点击事件
const handleLeftTap = (item: any, index: number) => {
  if(clicktPosition.value === 'left') {
    uni.$u.toast('请先选择右边的选项')
  } else {
    clicktPosition.value = 'left'
    lineData.value[index].left = index + 1
    console.log(index, 'index')
  }
  console.log(lineData.value, 'lineData-left')
}

// 右边点击事件
const handleRightTap = (item: any, index: number) => {
  if(clicktPosition.value === 'right') {
    uni.$u.toast('请先选择左边的选项')
  } else {
    clicktPosition.value = 'right'
    lineData.value[index].right = index + 1
    lineData.value[index].showLine = true
  }
  console.log(lineData.value, 'lineData-right')
}

const lineClass = (item: any) => {
  return `line-${item.left}-${item.right}`;
}

onMounted(() => {
})

</script>

<style lang="scss" scoped>
  .line-wapper {
    width: 100%;
    height: 100%;
    background-color: antiquewhite;
    /* 公共类 */
    .wapper {
      width: 300rpx;
      height: 100%;
    }
    .item {
      width: 300rpx;
      height: 65rpx;
      margin-top: 35rpx;
      background: #000000;
      color: #fff;
    }

    .left-line-wapper {
      @extend .wapper;
      .left-line-item {
        @extend .item;
      }
    }
    .right-line-wapper {
      @extend .wapper;
      .right-line-item {
        @extend .item;
      }
    }
    .all-line-item {
      width: 90rpx;
      flex: 1;
      .line-item-box {
        flex: 1;
        margin-top: 35rpx;
        .line-item-line {
          background: #54BCBD;
          height: 3rpx;
        }
        .line-1-1 {
          width: 90rpx;
        }
        .line-1-2 {
          width: 132rpx;
          rotate: 45deg;
          margin-top: -100rpx;
        }
        .line-1-3 {
          width: 220rpx;
          rotate: 66deg;
          margin-top: -200rpx;
        }
        .line-1-4 {
          width: 320rpx;
          rotate: 73deg;
          margin-top: -280rpx;
        }

        .line-2-1 {
          width: 135rpx;
          rotate: -48deg;
          margin-top: 90rpx;
        }
        .line-2-2 {
          width: 90rpx;
          margin-top: -35rpx;
        }
        .line-2-3 {
          width: 140rpx;
          rotate: 48deg;
          margin-top: -120rpx;
        }
        .line-2-4 {
          width: 220rpx;
          rotate: 66deg;
          margin-top: -200rpx;
        }
        
        .line-3-1 {
          width: 230rpx;
          rotate: -66deg;
          margin-top: 130rpx;
        }
        .line-3-2 {
          width: 90rpx;
          margin-top: 58rpx;
        }
        .line-3-3 {
          width: 140rpx;
          rotate: 48deg;
        }
        .line-3-4 {
          width: 140rpx;
          rotate: 48deg;
          margin-top: -120rpx;
        }
        
        .line-4-1 {
          width: 325rpx;
          rotate: -74deg;
          margin-top: 180rpx;
        }
        .line-4-2 {
          width: 250rpx;
          rotate: -68deg;
          margin-top: 10rpx;
        }
        
        .line-4-3 {
          width: 150rpx;
          rotate: -50deg;
          margin-top: -20rpx;
        }
        .line-4-4 {
          width: 90rpx;
          margin-top: -35rpx;
        }
      }
    }
  }
</style>