import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

export const SkeletLoading = () => {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <SkeletonPlaceholder.Item
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        marginBottom={8}>
        <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
          <SkeletonPlaceholder.Item
            width={60}
            height={60}
            borderRadius={30}
            marginLeft={10}
          />

          <SkeletonPlaceholder.Item marginHorizontal={10}>
            <SkeletonPlaceholder.Item width={225} height={10} />
            <SkeletonPlaceholder.Item marginTop={6} width={225} height={10} />
            <SkeletonPlaceholder.Item marginTop={6} width={100} height={10} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>

        <SkeletonPlaceholder.Item
          width={22}
          height={22}
          borderRadius={20}
          marginRight={10}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  )
}
