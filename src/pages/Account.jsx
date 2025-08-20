import Screen from '../components/Screen'
import F1 from '../assets/F1.jpg'
export default function Account() {
  return (
    <Screen padding={false}>
      <div className="bg-white">
        <div className="border-b border-dashed border-gray-200 p-6 sm:p-7">
          <div className="flex items-start gap-4">
            <div className="relative">
              <img src={F1} alt="avatar" className="w-16 h-16 rounded-full object-cover" />
              <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full grid place-items-center text-xs bg-popx-primary text-white">i</span>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-gray-900">Marry Doe</p>
              <p className="text-sm text-gray-600">Marry@gmail.com</p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-gray-600 max-w-[520px]">
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          </p>
        </div>
        <div className="p-6 sm:p-7 h-[420px]">
          {/* empty white area per design */}
        </div>
      </div>
    </Screen>
  )
}
